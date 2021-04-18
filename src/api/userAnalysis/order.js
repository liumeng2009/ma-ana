import request from '@/utils/request';

const api = {
  list: '/user-analysis/order',
  accounts: '/user-analysis/order/accounts'
};

export function orderList() {
  return request({
    url: api.list,
    method: 'get'
  });
}

export function accountsList() {
  return request({
    url: api.accounts,
    method: 'get'
  });
}
