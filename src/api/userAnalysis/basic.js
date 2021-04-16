import request from '@/utils/request';

const api = {
  basic: '/user-analysis/basic'
};

export function basicList () {
  return request({
    url: api.basic,
    method: 'get'
  });
}
