<template>
  <Row :gutter="8">
    <Col :span="6">
      <div class="page-search-bar" style="margin: 8px 0px">
        <Row style="width: 100%">
          <Col span="4" style="line-height: 24px">对象：</Col>
          <Col span="20"><Input style="float: left" placeholder="请输入手机号/ID" size="small" /></Col>
        </Row>
      </div>
      <div class="page-content" :style="{ height: leftHeight + 'px' }">
        <div class="title"> 基础信息 </div>
        <Tabs size="small">
          <TabPane :label="item.platform" v-for="(item, index) in accounts" :key="index">
            <Row class="description" :gutter="8">
              <Col span="8">注册时间：</Col>
              <Col span="16">{{ item.regTime }}</Col>
              <Col span="8">昵称：</Col>
              <Col span="16">{{ item.nickName }}</Col>
              <Col span="8">认证情况：</Col>
              <Col span="16">{{ item.certification ? '实名认证' : '未认证' }}</Col>
              <Col span="8">身份证：</Col>
              <Col span="16">{{ item.idCard }}</Col>
              <Col span="8">邮箱：</Col>
              <Col span="16">{{ item.email }}</Col>
              <Col span="8">会员情况：</Col>
              <Col span="16">{{ item.vip ? 'VIP' : '普通用户' }}</Col>
              <Col span="8">下单次数：</Col>
              <Col span="16">{{ item.orderCount }}</Col>
              <Col span="8">累计金额：</Col>
              <Col span="16">{{ item.amountAll }}</Col>
              <Col span="8">购买数量：</Col>
              <Col span="16">{{ item.goodsCount }}</Col>
              <Col span="8">退货次数：</Col>
              <Col span="16">{{ item.goodsReturn }}</Col>
            </Row>
          </TabPane>
        </Tabs>
        <Spin v-if="basicLoading" fix></Spin>
      </div>
    </Col>
    <Col :span="18">
      <div class="page-content" :style="{ height: rightHeight + 'px', marginTop: '8px' }">
        <Row :gutter="32">
          <Col span="12">
            <h3>关注商品占比</h3>
            <Divider />
            <div style="position: relative">
              <Pie style="height: 300px" :data="followData" :compId="1" />
              <Spin fix v-if="followLoading" />
            </div>
          </Col>
          <Col span="12">
            <h3>收藏商品占比</h3>
            <Divider />
            <div style="position: relative">
              <Pie style="height: 300px" :data="collectData" :compId="2" />
              <Spin fix v-if="collectLoading" />
            </div>
          </Col>
          <Col span="12">
            <h3>收藏商品转化分析</h3>
            <Divider />
            <div tyle="position: relative">
              <PercentBar :data="followPercentData" />
              <Spin v-if="followPercentLoading" fix />
            </div>
          </Col>
          <Col span="12">
            <h3>关注商品转化分析</h3>
            <Divider />
            <div tyle="position: relative">
              <PercentBar :data="collectPercentData" />
              <Spin v-if="collectPercentLoading" fix />
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  </Row>
</template>

<script>
  import { accountsList } from '@/api/userAnalysis/order';
  import { followData, collectData, followPercent, collectPercent } from '@/api/userAnalysis/recommend';
  import { getWindowHeight, pageHeightInfo, contentMinHeight, debounce } from '@/utils/utils';
  import Pie from '@/components/charts/Pie';
  import PercentBar from './component/PecentBar';
  export default {
    name: 'RecommendPage',
    components: {
      Pie,
      PercentBar
    },
    data() {
      return {
        accounts: [],
        followData: [],
        followLoading: false,
        collectData: [],
        collectLoading: false,
        followPercentData: [],
        followPercentLoading: false,
        collectPercentData: [],
        collectPercentLoading: false,
        basicLoading: false,
        queryParams: {
          pageNo: 1,
          pageSize: 10,
          keyword: '',
          platform: 0
        },
        // view
        leftHeight: 0,
        rightHeight: 0
      };
    },
    created() {
      this.getData();
    },
    mounted() {
      this.getHeight();
      this.addListener();
    },
    destroyed() {
      this.removeListener();
    },
    methods: {
      getHeight() {
        const windowHeight = getWindowHeight();
        let frameHeight = 0;
        for (const p in pageHeightInfo) {
          frameHeight += pageHeightInfo[p];
        }
        const searchBarHeight = 40 + 16;
        const minLeftHeight = contentMinHeight - pageHeightInfo.breadHeight - searchBarHeight - pageHeightInfo.contentPadding;
        const minRightHeight = contentMinHeight - pageHeightInfo.breadHeight - pageHeightInfo.contentPadding;
        this.leftHeight = windowHeight - frameHeight - searchBarHeight;
        this.leftHeight = this.leftHeight < minLeftHeight ? minLeftHeight : this.leftHeight;
        this.rightHeight = windowHeight - frameHeight - 8;
        this.rightHeight = this.tableHeight < minRightHeight ? minRightHeight : this.rightHeight;
      },
      addListener() {
        window.addEventListener('resize', debounce(this.getHeight, 500), false);
      },
      removeListener() {
        window.removeEventListener('resize', debounce(this.getHeight, 500), false);
      },
      getData() {
        this.basicLoading = true;
        accountsList()
          .then((res) => {
            console.log(res);
            this.accounts = res.result;
          })
          .finally(() => {
            this.basicLoading = false;
          });
        this.followLoading = true;
        followData()
          .then((res) => {
            this.followData = res.result;
          })
          .finally(() => {
            this.followLoading = false;
          });
        this.collectLoading = true;
        collectData()
          .then((res) => {
            this.collectData = res.result;
          })
          .finally(() => {
            this.collectLoading = false;
          });

        this.followPercentLoading = true;
        followPercent()
          .then((res) => {
            console.log('lm', res);
            this.followPercentData = res.result;
          })
          .finally(() => {
            this.followPercentLoading = false;
          });
        this.collectPercentLoading = true;
        collectPercent()
          .then((res) => {
            this.collectPercentData = res.result;
          })
          .finally(() => {
            this.collectPercentLoading = false;
          });
      }
    }
  };
</script>

<style></style>
