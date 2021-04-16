import router from './index';
import NProgress from 'nprogress';
import store from '@/store';
import storage from 'store';
import notification from 'view-design/src/components/notice';
import '@/components/nprogress/nprogress.scss';
import { setDocumentTitle, domTitle } from '@/utils/domUtil';
import { ACCESS_TOKEN } from '@/store/mutation-types';
// import { filterAsyncRouter } from '@/utils/utils';
import { routes, resetRouter } from '@/router/index';

const defaultRoutePath = '/monitorHall';

NProgress.configure({ showSpinner: true });

const allowList = ['Login'];

router.beforeEach((to, from, next) => {
  // console.log(to);
  NProgress.start();
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title} - ${domTitle}`));
  if (storage.get(ACCESS_TOKEN)) {
    console.log('这里');
    if (to.path === '/login') {
      next({ path: defaultRoutePath });
      NProgress.done();
    } else {
      if (!store.getters.userInfo.id) {
        store.dispatch('GetInfo').then(res => {
          // console.log(res);
          notification.success({
            title: '您好',
            // desc: err + ', 即将跳转到登录页'
            desc: `${res.result.sysUserName}, 欢迎回来`
          });
          // const accessedRouters = filterAsyncRouter(routes, store.getters.roles);
          // console.log(accessedRouters);
          store.commit('SET_ROUTES', routes);
          resetRouter(router);
          router.addRoutes(routes);
        }).catch(() => {
          // 失败时，获取用户信息失败时，调用登出，来清空历史保留信息
          setTimeout(() => {
            store.dispatch('Logout').then(() => {
              next({ path: '/login' });
            });
          }, 500);
        });
      } else {
        next();
      }
    }
  } else {
    // console.log(to.name);
    if (allowList.includes(to.name)) {
      // console.log('here');
      next();
    } else {
      next({ path: '/login' });
      NProgress.done();
    }
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});
