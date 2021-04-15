import Mock from 'mockjs';
import { builder, getBody } from '../util';

const username = 'admin';
const password = '123456';

const randomImage = () => {
  const result = 'data:image/jpg;base64,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';
  return builder(result);
};

const login = (options) => {
  // console.log(options);
  const body = getBody(options);
  // console.log(body);
  // console.log(username !== body.username);
  // console.log(password !== body.password);
  if (username !== body.username || password !== body.password) {
    console.log('失败');
    return builder(null, '账户或者密码错误', 500);
  } else {
    console.log('成功');
    return builder({
      token: 'testToken'
    });
  }
};

const info = () => {
  const userInfo = {
    id: '4291d7da9005377ec9aec4a71ea837f',
    name: '管理员',
    sysUserName: '管理员',
    sysAvatar: 'https://static.jeecg.com/temp/国炬软件logo_1606575029126.png'
  };
  return builder(userInfo);
};

Mock.mock(/\/api\/sys\/randomImage/, 'get', randomImage);
Mock.mock(/\/api\/sys\/login/, 'post', login);
Mock.mock(/\/api\/sys\/user\/getUserSectionInfoByToken/, 'get', info);
