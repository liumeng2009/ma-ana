import request from '@/utils/request';

const api = {
  importList: '/data-manage/import'
};

export function importList () {
  return request({
    url: api.importList,
    method: 'get'
  });
}
