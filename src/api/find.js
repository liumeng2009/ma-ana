import request from '@/utils/request';
import qs from 'qs';

const findApi = {
  clueList: '/intelligence/selectClueList',
  clueDetail: '/intelligence/selectClueDetail',
  eventList: '/model/searchByPage',
  eventDetail: '/model/selectModelDetail',
  eventStatistics: '/model/eventStatistics',
  clueFind: '/intelligence/selectClueListToday',
  clueStatistics: '/intelligence/clueStatistics'
};

export function clueList(params) {
  return request({
    url: findApi.clueList,
    method: 'get',
    params,
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: 'comma' });
    }
  });
}

export function clueDetail(id, platform) {
  return request({
    url: findApi.clueDetail,
    method: 'get',
    params: {
      id,
      platform
    }
  });
}

export function eventList(params) {
  return request({
    url: findApi.eventList,
    method: 'get',
    params
  });
}

export function eventDetail(id) {
  return request({
    url: findApi.eventDetail,
    methods: 'get',
    params: {
      id
    }
  });
}
export function eventStatistics(params) {
  return request({
    url: findApi.eventStatistics,
    methods: 'get',
    params
  });
}
export function clueFind(params) {
  return request({
    url: findApi.clueFind,
    methods: 'get',
    params
  });
}
export function clueStatistics(params) {
  return request({
    url: findApi.clueStatistics,
    methods: 'get',
    params
  });
}
