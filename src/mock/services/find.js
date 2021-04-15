import Mock from 'mockjs';
import { builder } from '../util';

const clueSearch = () => {
  return builder({

  });
};

Mock.mock(/\/api\/intelligence\/selectClueList/, 'get', clueSearch);
