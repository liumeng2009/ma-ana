import Mock from 'mockjs';
import { builder } from '../../util';

const orderList = () => {
  const list = [];
  for (let i = 0; i < 10; i++) {
    const listItem = {
      id: Mock.Random.guid(),
      platform: Mock.mock({ 'array|1': ['淘宝', '每日优鲜', '唯品会', '苏宁易购'] }),
      orderTime: Mock.Random.date('yyyy-MM-dd HH:mm:ss'),
      orderCount: Mock.Random.integer(1, 20),
      orderAmount: Mock.Random.float(10, 5000),
      takeDelivery: Mock.Random.integer(0, 1),
      takeDeliveryTime: Mock.Random.date('yyyy-MM-dd'),
      address: Mock.Random.county(true)
    };
    list.push(listItem);
  }
  return builder(list);
};

const accountList = () => {
  const platforms = ['京东', '淘宝', '唯品会', '苏宁易购', '拼多多'];
  const list = [];

  platforms.forEach(ele => {
    const listItem = {
      id: Mock.Random.guid(),
      platform: ele,
      regTime: Mock.Random.date('yyyy-MM-dd HH:mm:ss'),
      nickName: Mock.Random.cname(),
      certification: Mock.Random.boolean(),
      idCard: Mock.Random.integer(100000000000000000, 999999999999999999),
      email: Mock.Random.email(),
      vip: Mock.Random.boolean(),
      orderCount: Mock.Random.integer(1, 200),
      amountAll: Mock.Random.float(10, 10000),
      goodsCount: Mock.Random.integer(1, 500),
      goodsReturn: Mock.Random.integer(1, 50)
    };
    list.push(listItem);
  });
  return builder(list);
};

Mock.mock(/\/api\/user-analysis\/order\/accounts/, 'get', accountList);
Mock.mock(/\/api\/user-analysis\/order/, 'get', orderList);
