import { ACCESS_TOKEN } from '@/store/mutation-types';
import { login, getAuth, getInfo } from '@/api/login';
import storage from 'store';
import message from 'view-design/src/components/message';

const user = {
  state: {
    token: '',
    roles: [],
    addRoutes: [],
    info: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_INFO: (state, userInfo) => {
      state.info = userInfo;
    },
    SET_ROUTES: (state, routes) => {
      // console.log(routes);
      state.addRoutes = routes;
    }
  },

  actions: {
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(res => {
          // console.log(res);
          const result = res.result;
          // console.log(result.token);
          storage.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000);
          commit('SET_TOKEN', result.token);
          resolve();
        }).catch(err => {
          reject(err);
        });
      });
    },
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        message.info({
          content: '正在获取您的用户信息',
          duration: 0
        });
        getInfo().then(res => {
          const userInfo = res.result;
          getAuth().then(auths => {
            message.destroy();
            if (auths.result && auths.result.menu && auths.result.menu.length > 0) {
              const menuAuths = auths.result.menu;
              // console.log(menuAuths);
              const menuAuthList = [];
              menuAuths.map(menu => {
                menuAuthList.push(menu.name);
                const childMenuAuths = menu.children ? menu.children : [];
                childMenuAuths.map(child => {
                  menuAuthList.push(child.name);
                });
              });
              commit('SET_ROLES', { menuAuthList });
              commit('SET_INFO', userInfo);
              resolve(res);
            }
          }).catch(err => {
            message.destroy();
            reject(err);
          });
        }).catch(err => {
          message.destroy();
          reject(err);
        });
      });
    },
    // 登出
    Logout ({ commit }) {
      commit('SET_TOKEN', '');
      commit('SET_ROLES', []);
      storage.remove(ACCESS_TOKEN);
    }
  }
};

export default user;
