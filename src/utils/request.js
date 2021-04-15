import axios from 'axios';
import store from '@/store';
import storage from 'store';
import notification from 'view-design/src/components/notice';
import { VueAxios } from './axios';
import { ACCESS_TOKEN } from '@/store/mutation-types';
import * as moment from 'moment';

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 100000 // 请求超时时间
});

// 异常拦截处理器
const errorHandler = (error) => {
  // console.log('异常', error);
  if (error.response) {
    const data = error.response.data;
    // 从 localstorage 获取 token
    const token = storage.get(ACCESS_TOKEN);
    if (error.response.status === 403) {
      notification.error({
        title: '拒绝访问',
        desc: data.message
      });
    } else if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      notification.error({
        title: '没有权限',
        desc: '权限验证失败，请重新登录'
      });
      if (token) {
        store.dispatch('Logout').then(() => {
          setTimeout(() => {
            // window.location.reload();
          }, 1500);
        });
      }
    } else {
      notification.error({
        title: '错误',
        desc: error.toString()
      });
    }
  } else {
    notification.error({
      title: '错误',
      desc: error.message && error.message === 'Network Error' ? '网络请求超时' : error.toString()
    });
  }
  return Promise.reject(error);
};

// request interceptor
request.interceptors.request.use(config => {
  const token = storage.get(ACCESS_TOKEN);
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  if (token) {
    config.headers['X-Access-Token'] = token;
  }
  const timestamp = moment().valueOf();
  config.params = {
    timestamp: timestamp,
    ...config.params
  };
  return config;
}, errorHandler);

// response interceptor
request.interceptors.response.use((response) => {
  return new Promise((resolve, reject) => {
    const data = response.data;
    // console.log('服务器返回正常', data);
    if (data.code === 500 || data.code === 405) {
      // reject(data.message)
      notification.error({
        title: '错误',
        desc: data.message || '接口请求错误'
      });
      reject(data);
    }

    if (data.code === 200) {
      if (data.message && data.message !== '操作成功！' && data.message !== '登录成功' && data.message !== '查询成功') {
        notification.success({
          title: data.message
        });
      }
    }
    resolve(data);
  });
}, errorHandler);

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, request);
  }
};

export default request;

export {
  installer as VueAxios,
  request as axios
};
