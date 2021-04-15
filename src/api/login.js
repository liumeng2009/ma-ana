import request from '@/utils/request';
import storage from 'store';
import { ACCESS_TOKEN } from '@/store/mutation-types';
const REQUEST_KEY = 'lm';

const userApi = {
  RandomImage: '/sys/randomImage',
  Login: '/sys/login',
  UserInfo: '/sys/user/getUserSectionInfoByToken',
  UserAuth: '/sys/permission/getUserPermissionByToken'
};

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function randomImage () {
  return request({
    url: userApi.RandomImage + '/' + REQUEST_KEY,
    method: 'get'
  });
}

export function login (parameter) {
  const requestParameter = {};
  Object.assign(requestParameter, { checkKey: REQUEST_KEY }, parameter);
  return request({
    url: userApi.Login,
    method: 'post',
    data: requestParameter
  });
}

export function getInfo () {
  const token = storage.get(ACCESS_TOKEN);
  return request({
    url: userApi.UserInfo,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params: {
      token
    }
  });
}

export function getAuth () {
  const token = storage.get(ACCESS_TOKEN);
  return request({
    url: userApi.UserAuth,
    method: 'get',
    params: {
      token
    }
  });
}
