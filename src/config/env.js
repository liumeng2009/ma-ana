/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

// let baseUrl = 'http://192.168.2.42:7002/';
const baseUrl = 'http://192.168.3.47:9999';
// let fileUrl = 'http://192.168.2.124:3007'

const routerMode = 'history';
let imgBaseUrl = '';

// 暂时一致，待服务器增加时再区分
if (process.env.NODE_ENV === 'development') {
  imgBaseUrl = '';
} else if (process.env.NODE_ENV === 'production') {
  imgBaseUrl = '';
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl
  // fileUrl
};
