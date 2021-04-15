import fetch from '@/config/fetch';
const REQUEST_KEY = 'lm';

// 验证码图片 {key}参数，任意值
export const randomImage = (obj) => fetch('/sys/randomImage/' + REQUEST_KEY);
// 登录
export const login = (obj) => fetch('/sys/login', { ...obj, checkKey: REQUEST_KEY }, 'POST');
// 获取用户权限
export const userPermission = (obj) => fetch('/sys/permission/getUserPermissionByToken');

// 线索查询
export const getClueList = (oj) => fetch('/intelligence/selectClueList', { ...oj });
// 线索详情
export const getClueDetail = (id, platform) => fetch('/intelligence/selectClueDetail?id=' + id + '&platform=' + platform);

// （行动类）事件查询
export const getEventList = (oj) => fetch('/model/searchByPage', { ...oj }, 'POST');
// （行动类）事件详情
export const getEventDetail = (id) => fetch('/model/selectModelDetail?id=' + id, { id }, 'POST');

// 事件上报
export const getEventStatistics = (oj) => fetch('/model/eventStatistics', { ...oj }, 'POST');
