import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'view-design/dist/styles/iview.css';
import '@/style/common.scss';

import './utils/filter';
import '@/router/permission';
import '@/core/lazyUse';
import { VueAxios } from './utils/request';

import './mock';

/**
 *  日志输出开关
 */
Vue.config.productionTip = false;

Vue.use(VueAxios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
