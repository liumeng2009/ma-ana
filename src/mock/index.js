// console.log(process.env);
if (process.env.VUE_APP_PREVIEW) {
  // console.log('mock mounting');

  const Mock = require('mockjs');
  require('./services/user');
  require('./services/dataManage/importList');
  require('./services/userAnalysis/basic');
  require('./services/userAnalysis/order');
  require('./services/userAnalysis/recommend');

  Mock.setup({
    timeout: 500
  });

  // console.log('mock mounted');
}
