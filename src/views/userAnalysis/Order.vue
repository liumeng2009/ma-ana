<template>
  <Row :gutter="8">
    <Col :span="6">
      <div class="page-search-bar">
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
      <div class="page-search-bar">
        <div style="display: flex">
          <Input size="small" placeholder="请输入关键字" style="margin-right: 16px; width: 120px" />
          <Select v-model="queryParams.platform" size="small" style="margin-right: 16px; width: 120px">
            <Option v-for="(item, index) in platforms" :key="index" :value="item.value">{{ item.name }}</Option>
          </Select>
          <DatePicker size="small" style="width: 120px" />
          <span style="margin: 0px 4px">-</span>
          <DatePicker size="small" style="margin-right: 16px; width: 120px" />
          <Button type="primary" size="small">查询</Button>
        </div>
        <div>
          <Button type="primary" size="small">批量导出</Button>
        </div>
      </div>
      <div class="page-content">
        <Table border :columns="orderColumns" :data="data" :loading="loading" :height="tableHeight">
          <template #action>
            <a href="">详情</a>
          </template>
        </Table>
        <Page :total="100" />
        <!-- <div style="clear: both"></div> -->
      </div>
    </Col>
  </Row>
</template>

<script>
  import { orderColumns } from './columns';
  import { orderList, accountsList } from '@/api/userAnalysis/order';
  import { getWindowHeight, pageHeightInfo, contentMinHeight } from '@/utils/utils';
  import _debounce from 'lodash.debounce';
  export default {
    name: 'OrderPage',
    data() {
      return {
        orderColumns,
        data: [],
        accounts: [],
        loading: false,
        basicLoading: false,
        platforms: [
          { name: '全部平台', value: 0 },
          { name: '淘宝', value: 4 },
          { name: '每日优鲜', value: 1 },
          { name: '唯品会', value: 2 },
          { name: '苏宁易购', value: 3 }
        ],
        queryParams: {
          pageNo: 1,
          pageSize: 10,
          keyword: '',
          platform: 0
        },
        // view
        leftHeight: 0,
        tableHeight: 0
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
        const tableContainerHeight = 32;
        const pageHeight = 32 + 16;
        const minLeftHeight = contentMinHeight - pageHeightInfo.breadHeight - searchBarHeight - pageHeightInfo.contentPadding;
        const minTableHeight = contentMinHeight - pageHeightInfo.breadHeight - searchBarHeight - tableContainerHeight - pageHeight - pageHeightInfo.contentPadding;
        this.leftHeight = windowHeight - frameHeight - searchBarHeight;
        this.leftHeight = this.leftHeight < minLeftHeight ? minLeftHeight : this.leftHeight;
        this.tableHeight = this.leftHeight - tableContainerHeight - pageHeight;
        this.tableHeight = this.tableHeight < minTableHeight ? minTableHeight : this.tableHeight;
      },
      addListener() {
        window.addEventListener('resize', _debounce(this.getHeight, 500), false);
      },
      removeListener() {
        window.removeEventListener('resize', _debounce(this.getHeight, 500), false);
      },
      getData() {
        this.loading = true;
        this.basicLoading = true;
        orderList()
          .then((res) => {
            this.data = res.result;
          })
          .finally(() => {
            this.loading = false;
          });
        accountsList()
          .then((res) => {
            console.log(res);
            this.accounts = res.result;
          })
          .finally(() => {
            this.basicLoading = false;
          });
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
