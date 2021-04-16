<template>
  <div>
    <div class="page-search-bar">
      <div style="display: flex">
        <Input size="small" style="margin-right: 16px" placeholder="手机号/身份证号" />
        <Select v-model="queryParams.platform" size="small" style="margin-right: 16px">
          <Option v-for="(item, index) in platforms" :key="index" :value="item.value">{{ item.name }}</Option>
        </Select>
        <Select v-model="queryParams.certification" size="small" style="margin-right: 16px">
          <Option v-for="(item, index) in certifications" :key="index" :value="item.value">{{ item.name }}</Option>
        </Select>
        <Button type="primary" size="small">查询</Button>
      </div>
      <div>
        <Button type="primary" size="small">批量导出</Button>
      </div>
    </div>
    <div class="page-content">
      <Table border :columns="basicColumns" :data="data" :loading="loading"></Table>
      <Page :total="100" />
      <!-- <div style="clear: both"></div> -->
    </div>
  </div>
</template>

<script>
  import { basicColumns } from './columns';
  import { basicList } from '@/api/userAnalysis/basic';
  export default {
    name: 'IndexPage',
    data() {
      return {
        basicColumns,
        data: [],
        loading: false,
        platforms: [
          { name: '全部平台', value: 0 },
          { name: '淘宝', value: 4 },
          { name: '每日优鲜', value: 1 },
          { name: '唯品会', value: 2 },
          { name: '苏宁易购', value: 3 }
        ],
        certifications: [
          { name: '全部', value: 0 },
          { name: '已认证', value: 1 },
          { name: '未认证', value: 2 }
        ],
        queryParams: {
          pageNo: 1,
          pageSize: 10,
          keyword: '',
          platform: 0,
          certification: 0
        }
      };
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        this.loading = true;
        basicList()
          .then((res) => {
            console.log(res);
            this.data = res.result;
          })
          .catch(() => {})
          .finally(() => {
            this.loading = false;
          });
      }
    }
  };
</script>

<style></style>
