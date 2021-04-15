import request from '@/utils/request';

const tjNewsApi = {
  tjClueFind: '/intelligence/selectClueListTodayByRegion',
  tjClueStatistics: '/intelligence/clueStatisticsByRegion',
  tjEventReport: '/model/searchByPageAndRegion',
  tjEventStatistics: '/model/eventStatisticsByRegion'
};

export function tjClueFind(params) {
  return request({
    url: tjNewsApi.tjClueFind,
    methods: 'get',
    params
  });
}
export function tjClueStatistics(params) {
  return request({
    url: tjNewsApi.tjClueStatistics,
    methods: 'get',
    params
  });
}
export function tjEventReport(params) {
  return request({
    url: tjNewsApi.tjEventReport,
    method: 'get',
    params
  });
}
export function tjEventStatistics(params) {
  return request({
    url: tjNewsApi.tjEventStatistics,
    methods: 'get',
    params
  });
}
