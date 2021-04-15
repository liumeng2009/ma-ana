<template lang="html">
  <div class="layout">
    <Layout>
      <Header>
        <CusHeader />
      </Header>
      <Layout>
        <Sider
          :collapsible="false"
          v-model="isCollapse"
          width="270"
          style="background: #101129; height: 100%; overflow-y: auto"
        >
          <LeftMenu />
        </Sider>
        <Layout>
          <Content style="height: 100%; overflowy: scroll; overflowx: hidden; padding: 8px">
            <transition name="route-change" mode="out-in" appear>
              <keep-alive v-if="isKeepAlive">
                <router-view></router-view>
              </keep-alive>
              <router-view v-else></router-view>
            </transition>
          </Content>
          <!--
          <Footer class="layout-footer-center">
            © 2021 All Right Reserved 天津戎行集团有限公司
          </Footer>-->
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import LeftMenu from './components/menu';
  import CusHeader from './components/header';

  export default {
    name: 'Index',
    components: {
      LeftMenu,
      CusHeader
    },
    data() {
      return {
        routerIndex: this.$router.history.current.path,
        isCollapse: true
      };
    },
    computed: {
      isKeepAlive() {
        // console.log(this.$route);
        return this.$route.meta && this.$route.meta.keepAlive;
      }
    },
    methods: {
      userClick(type) {
        if (type === 3) {
          // removeStore('YJ_TOKEN');
          setTimeout(() => {
            this.$router.push('/login');
          }, 500);
        } else {
          // this.getAccount();
          // this.adminModal = true;
        }
      }
    }
  };
</script>

<style lang="scss">
  .layout {
    height: 100%;

    .ivu-layout {
      height: 100%;

      &.ivu-layout-has-sider {
        // min-height: 600px;
        height: calc(100% - 99px);
      }
    }
  }
  .layout-footer-center {
    width: 80%;
    bottom: 0px;
    padding: 8px 0px;
    text-align: center;
  }
  .route-change-enter-active,
  .route-change-leave-active {
    transition: all 0.2s;
  }
  .route-change-enter {
    transform: translate3d(20%, 0, 0);
  }
</style>
