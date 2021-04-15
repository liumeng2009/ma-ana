import request from '@/utils/request';
import qs from 'qs';

const aMonitorApi = {
  monitorGroup: '/monitorGroup/search/',
  motitorAccount: 'monitorAccount/search/',
  articleList: '/monitorAccount/getDetailListById'
};

export function monitorGroup(parameter) {
  return request({
    url: aMonitorApi.monitorGroup + '1/1000',
    method: 'post',
    data: parameter
  });
}

export function monitorAccount(parameter) {
  return request({
    url: aMonitorApi.motitorAccount + '1/1000',
    method: 'post',
    data: parameter
  });
}

export function articleList(parameter) {
  return request({
    url: aMonitorApi.articleList,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(parameter)
  });
}
