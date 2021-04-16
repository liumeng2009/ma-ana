import Mock from 'mockjs';
import { builder } from '../../util';

const basiList = () => {
  const list = [];
  for (let i = 0; i < 10; i++) {
    const listItem = {
      id: Mock.Random.guid(),
      phone: Mock.Random.integer(10000000000, 99999999999),
      platform: Mock.mock({ 'array|1': ['淘宝', '每日优鲜', '唯品会', '苏宁易购'] }),
      certification: Mock.Random.boolean(),
      idCard: Mock.Random.integer(100000000000000000, 999999999999999999),
      username: Mock.Random.name(),
      email: Mock.Random.email(),
      regDate: Mock.Random.date('yyyy-MM-dd HH:mm:ss'),
      nickname: Mock.Random.cname(),
      vip: Mock.Random.boolean()
    };
    list.push(listItem);
  }
  return builder(list);
};

Mock.mock(/\/api\/user-analysis\/basic/, 'get', basiList);
