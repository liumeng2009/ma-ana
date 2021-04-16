import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '@/views/index/Index.vue';

Vue.use(VueRouter);

const rootRoute = {
  path: '/',
  name: 'Home',
  component: Index,
  redirect: '/data-manage/list',
  meta: {
    title: '首页'
  }
};

const loginRoute = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/Login.vue'),
  meta: {
    title: '登录'
  }
};

const notFoundRoute = {
  path: '/404',
  name: 'NotFound',
  component: () => import('@/views/404.vue'),
  meta: {
    title: '未找到页面'
  }
};

const routes = [
  {
    path: '/data-manage',
    name: 'DataManage',
    component: Index,
    redirect: '/data-manage/list',
    meta: { title: '数据管理', icon: 'md-cloud-upload' },
    children: [
      // 二级标签页
      // 情报发现模块
      {
        path: '/data-manage/list',
        name: 'DataManageList',
        component: () => import('@/views/dataManage/List.vue'),
        meta: { title: '导入列表' }
      },
      {
        path: '/data-manage/import',
        name: 'DataManageImport',
        component: () => import('@/views/dataManage/DataImport.vue'),
        meta: { title: '数据导入' }
      },
      {
        path: '/data-manage/apiImport',
        name: 'DataManageApiImport',
        component: () => import('@/views/dataManage/ApiImport.vue'),
        meta: { title: '接口导入' }
      }
    ]
  },
  {
    path: '/user-analysis',
    name: 'UserAnalysis',
    component: Index,
    redirect: '/user-analysis/index',
    meta: { title: '用户统计', icon: 'md-person' },
    children: [
      {
        path: '/user-analysis/index',
        name: 'UserAnalysisIndex',
        component: () => import('@/views/userAnalysis/Index.vue'),
        meta: { title: '基础信息' }
      },
      {
        path: '/user-analysis/order',
        name: 'UserAnalysisOrder',
        component: () => import('@/views/userAnalysis/Order.vue'),
        meta: { title: '订单统计' }
      },
      {
        path: '/user-analysis/Recommend',
        name: 'UserAnalysisRecommend',
        component: () => import('@/views/userAnalysis/Recommend.vue'),
        meta: { title: '推荐反馈分析' }
      },
      {
        path: '/user-analysis/consumerBehavior',
        name: 'UserAnalysisConsumerBehavior',
        component: () => import('@/views/userAnalysis/ConsumerBehavior.vue'),
        meta: { title: '消费行为分析' }
      },
      {
        path: '/user-analysis/consumerPsychology',
        name: 'UserAnalysisConsumerPsychology',
        component: () => import('@/views/userAnalysis/ConsumerPsychology.vue'),
        meta: { title: '消费心理分析' }
      },
      {
        path: '/user-analysis/pay',
        name: 'UserAnalysisPay',
        component: () => import('@/views/userAnalysis/Pay.vue'),
        meta: { title: '支付能力分析' }
      }
    ]
  },
  {
    path: '/platform-analysis',
    name: 'PlatformAnalysis',
    component: Index,
    meta: { title: '平台统计', icon: 'md-cloud' },
    children: [
      {
        path: '/platform-analysis/commodity',
        name: 'PlatformAnalysisCommodity',
        component: () => import('@/views/platformAnalysis/Commodity.vue'),
        meta: { title: '推荐商品统计' }
      },
      {
        path: '/platform-analysis/channel',
        name: 'PlatformAnalysisChannel',
        component: () => import('@/views/platformAnalysis/Channel.vue'),
        meta: { title: '渠道统计' }
      },
      {
        path: '/platform-analysis/userKeep',
        name: 'PlatformAnalysisUserKeep',
        component: () => import('@/views/platformAnalysis/UserKeep.vue'),
        meta: { title: '用户留存' }
      },
      {
        path: '/platform-analysis/terminal',
        name: 'PlatformAnalysisTerminal',
        component: () => import('@/views/platformAnalysis/Terminal.vue'),
        meta: { title: '终端数据' }
      },
      {
        path: '/platform-analysis/thermodynamic',
        name: 'PlatformAnalysisThermodynamic',
        component: () => import('@/views/platformAnalysis/Thermodynamic.vue'),
        meta: { title: '热力图分析' }
      },
      {
        path: '/platform-analysis/group',
        name: 'PlatformAnalysisGroup',
        component: () => import('@/views/platformAnalysis/Group.vue'),
        meta: { title: '群体分析' }
      }
    ]
  },
  {
    path: '/sys',
    name: 'System',
    component: Index,
    meta: { title: '系统管理', icon: 'md-settings' },
    children: [
      {
        path: '/sys/user',
        name: 'SystemUser',
        component: () => import('@/views/sys/User.vue'),
        meta: { title: '用户管理' }
      },
      {
        path: '/sys/dictionaries',
        name: 'SystemDictionaries',
        component: () => import('@/views/sys/Dictionaries.vue'),
        meta: { title: '数据字典' }
      },
      {
        path: '/sys/log',
        name: 'SystemLog',
        component: () => import('@/views/sys/Log.vue'),
        meta: { title: '日志服务' }
      }
    ]
  },
  {
    path: '*',
    name: 'notFound',
    redirect: '/404',
    meta: {
      hidden: true
    }
  }
];

const routeAll = [rootRoute, loginRoute, notFoundRoute];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routeAll
});

const resetRouter = (r) => {
  const newRouter = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routeAll
  });
  r.matcher = newRouter.matcher;
};
export { routes, resetRouter };
export default router;
