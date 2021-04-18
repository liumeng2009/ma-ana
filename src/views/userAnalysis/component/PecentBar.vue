<template>
  <div class="container">
    <div style="display: flex; width: 100%; justify-content: space-between; font-weight: 600; font-size: 14px">
      <span>{{ title }}</span>
      <span>{{ percent }}%</span>
    </div>
    <div class="percent-item" v-for="(item, index) in data" :key="index">
      <div class="data">
        <div class="name">
          <i>{{ index + 1 }}</i>
          {{ item.name }} {{ item.value }} {{ data[0].value }}
        </div>
        <div class="count"> {{ item.value }}次 </div>
      </div>
      <div class="percent">
        <div class="back"></div>
        <div class="front" :style="{ width: (item.value / data[0].value) * 100 + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PercentBar',
    props: {
      data: {
        type: Array,
        default: () => []
      },
      title: {
        type: String,
        default: '总体转化率'
      }
    },
    data() {
      return {
        percent: 0
      };
    },
    watch: {
      data(val) {
        console.log(val);
        this.percent = ((val[3].value / val[0].value) * 100).toFixed(2);
      }
    }
  };
</script>

<style lang="scss" scoped>
.container {
  .percent-item {
    margin: 16px 0px;
    &:nth-of-type(1) {
      .percent .front {
        background: blue;
      }
    }
    &:nth-of-type(2) {
      .percent .front {
        background: #0099ff;
      }
    }
    &:nth-of-type(3) {
      .percent .front {
        background: #33cccc;
      }
    }
    &:nth-of-type(4) {
      .percent .front {
        background: orange;
      }
    }
    &:nth-of-type(5) {
      .percent .front {
        background: red;
      }
    }
    .data {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      .name {
        i {
          display: inline-block;
          background: #f0f0f0;
          width: 16px;
          height: 16px;
          text-align: center;
          line-height: 16px;
          font-size: 12px;
          font-style: initial;
        }
      }
    }
    .percent {
      position: relative;
      height: 20px;
      .back {
        position: absolute;
        left: 0px;
        top: 0px;
        height: 20px;
        width: 100%;
        background: #f0f0f0;
      }
      .front {
        position: absolute;
        left: 0px;
        top: 0px;
        height: 20px;
      }
    }
  }
}
</style>
