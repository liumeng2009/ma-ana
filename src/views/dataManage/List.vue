<template>
  <div>
    <div class="page-search-bar">
      <div style="display: flex">
        <Input size="small" style="margin-right: 16px" />
        <Button type="primary" size="small">查询</Button>
      </div>
      <div>
        <Button type="primary" size="small">导入</Button>
      </div>
    </div>
    <div class="page-content">
      <Table border :columns="importDataColumns" :data="data" :loading="loading"></Table>
      <Page :total="100" />
      <!-- <div style="clear: both"></div> -->
    </div>
  </div>
</template>

<script>
  import { importDataColumns } from './column';
  import { importList } from '@/api/dataManage/importList';
  export default {
    name: 'DataListPage',
    data() {
      return {
        importDataColumns,
        data: [],
        loading: false
      };
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        this.loading = true;
        importList()
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
