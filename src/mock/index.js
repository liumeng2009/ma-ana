// console.log(process.env);
if (process.env.VUE_APP_PREVIEW) {
  // console.log('mock mounting');

  const Mock = require('mockjs');
  require('./services/user');

  Mock.setup({
    timeout: 800
  });

  // console.log('mock mounted');
}
