<template lang="html">
  <div class="clueList">
    <div class="photo">
      <img :src="data.localAccountImg" alt="" />
    </div>
    <div class="cot">
      <h3>{{ data.account }}</h3>
      <span class="data">{{ data.createTime }}</span>
      <p v-html="data.myFullText"></p>
      <Button type="primary" @click="toDetail()" shape="circle">详情</Button>
    </div>
    <div class="tag">
      <span class="twt">{{ data.platform }}</span>
      <!-- <span class="tag-b">策略一</span> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ClueList',
    props: {
      data: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      toDetail() {
        // this.$router.push('/clueDetail/'+id);
        this.$router.push({
          path: '/clue/clueDetail',
          query: {
            id: this.$props.data.id,
            platform: this.$props.data.platform
          }
        });
      }
    }
  };
</script>

<style lang="scss">
  .clueList {
    width: 100%;
    height: auto;
    padding: 20px 20px 20px 40px;
    margin: 0 auto;
    background: white;
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #d9d9d9;
    position: relative;
    .photo {
      // width: 50px;
      // display: flex;
      // // align-items: center;
      // justify-content: center;
      img {
        width: 50px;
        height: 50px;
      }
    }
    .cot {
      margin-left: 40px;
      text-align: left;
      .data {
        font-size: 12px;
        margin-bottom: 20px;
      }
      p {
        // margin-bottom:20px;
        // font-weight: bolder;
        font-size: 12px;
      }
      .ivu-btn {
        width: 99px;
        height: 55px;
        position: relative;
        background: url(../../assets/img/Button.png) no-repeat;
        background-size: 100% 100%;
        color: white;
        border: none;
        outline: 0;
        &:hover {
          border: none;
        }
      }
      .ivu-btn:focus,
      .btn:active:focus,
      .btn.active:focus,
      .btn.focus,
      .btn:active.focus,
      .btn.active.focus {
        outline: none;
        border-color: transparent;
        box-shadow: none;
      }
    }
    .tag {
      position: absolute;
      top: 12px;
      right: 50px;
      .twt {
        display: inline-block;
        width: 88px;
        background: url(../../assets/img/icon-Twitter.png) no-repeat 38px 0px;
      }
      .tag-b {
        width: 30px;
        height: 30px;
        background: #eff7fd;
        color: #67a7d1;
        margin-left: 5px;
      }
    }
  }
</style>
