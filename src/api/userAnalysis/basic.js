import request from '@/utils/request';

const api = {
  list: '/user-analysis/basic'
};

export function basicList () {
  return request({
    url: api.list,
    method: 'get'
  });
}
