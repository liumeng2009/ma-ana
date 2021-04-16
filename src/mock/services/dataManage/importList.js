import Mock from 'mockjs';
import { builder } from '../../util';

const importList = () => {
  const list = [];
  for (let i = 0; i < 10; i++) {
    const listItem = {
      id: Mock.Random.guid(),
      importTime: Mock.Random.date('yyyy-MM-dd HH:mm:ss'),
      fileType: 'xslx',
      fileName: Mock.Random.string('lower', 15),
      operator: Mock.Random.cname(),
      count: Mock.Random.integer(100000, 500000),
      type: '用户数据'
    };
    list.push(listItem);
  }
  return builder(list);
};

Mock.mock(/\/api\/data-manage\/import/, 'get', importList);
