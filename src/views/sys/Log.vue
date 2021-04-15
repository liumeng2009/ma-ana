<template lang="html">
    <Card title="日志管理" :dis-hover="true" style="height:800px;">
      <Form :label-position="'left'" :label-width="80" inline>
         <FormItem label="关键词:">
              <Input v-model="queryParams.keyWord" placeholder="请输入线索关键词" />
            </FormItem>
        <FormItem label="时间范围:">
          <DatePicker
            class="picker"
            :editable="false"
            format="yyyy-MM-dd"
            :value="queryParams.startTime"
            @on-change="queryParams.startTime = $event"
            placeholder="开始时间"
          ></DatePicker>
          -
          <DatePicker
            class="picker"
            :editable="false"
            format="yyyy-MM-dd"
            :value="queryParams.endTime"
            @on-change="queryParams.endTime = $event"
            placeholder="结束时间"
          ></DatePicker>
        </FormItem>
        <FormItem style="margin-bottom: 0px">
          <Button class="btn-2" type="primary" @click="handleBtnClick"> 查询 </Button>
        </FormItem>
        </FormItem>
          <Button class="btn-2" type="primary" @click="exportDate"> 导出 </Button>
        </FormItem>
      </Form>
      <div class="table table-a">
        <Table stripe :columns="columns" :data="data"></Table>
      </div>
       <div class="pagination">
        <Page
          ref="pager"
          v-if="data.length > 0"
          :total="total"
          @on-change="handlePageChange"
          :page-size="queryParams.pageSize"
          show-elevator
        />
      </div>
    </Card>
</template>

<script>
  import * as moment from 'moment';
  import { logList, logExport } from '@/api/system.js';
  export default {
    data() {
      return {
        columns: [
          {
            title: '名称',
            key: 'username'
          },
          {
            title: '操作内容',
            key: 'operateType_dictText'
          },
          {
            title: '账号',
            key: 'userid'
          },
          {
            title: '时间',
            key: 'createTime'
          }
        ],
        data: [],
        data1: {},
        total: 0,
        queryParams: {
          pageNo: 1,
          pageSize: 10,
          startTime: moment().startOf('day').format('yyyy-MM-DD'),
          endTime: moment().endOf('day').format('yyyy-MM-DD'),
          keyWord: ''
        }
      };
    },
    methods: {
      getData() {
        logList(this.queryParams).then((res) => {
          this.data = res.result.records;
          this.data1 = res.result;
          this.total = res.result.total;
        });
      },
      exportDate () {
        logExport(this.queryParams).then((res) => {
          // window.open(res.result.records);
          console.log(res);
          this.downloadContent(res);
        });
      },
      downloadContent (value) {
        const blod = new Blob([value], { type: 'application/vnd.ms-excel' });
        const link = document.createElement('a');
        const url = window.URL.createObjectURL(blod);
        link.href = url;
        link.setAttribute('download', 'test.xls');
        link.style.display = 'none';
        console.log('here', link);
        link.click();
      },
      handleBtnClick() {
        this.queryParams.pageNo = 1;
        this.getData();
      },
      handlePageChange(e) {
        this.queryParams.pageNo = e;
        this.getData();
      }
    },
    created() {
      this.getData();
    }
  };
</script>

<style lang="scss">
.ivu-form{
  padding:10px 0 10px 35px;
}
      .table {
        width: 100%;
        margin: 0 auto;
        border: 1px solid #d9d9d9;
        .ivu-table {
          .ivu-table-row:nth-child(even) td {
            background: #eff7fd;
          }
          .ivu-table-row:nth-child(odd) td {
            background: white;
          }
        }
      }
</style>
