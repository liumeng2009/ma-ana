<template lang="html">
  <div class="fermentList">
    <div class="wrap">
      <h3>{{ data.accountName }}</h3>
      <p>{{ data.source }}</p>
      <div class="pro">
        <Progress :percent="82" :stroke-color="['#108ee9', '#87d068']" />
      </div>
      <div class="tag">
        <div class="tag-a">
          <h4><img src="../../assets/img/tag.png" alt="">{{ data.actionWords }}</h4>
          <h4><img src="../../assets/img/icon-time.png" alt="">{{ data.myTwTime }}</h4>
          <h4><img src="../../assets/img/icon-position.png" alt="">{{ data.location }}</h4>
          <h4><img src="../../assets/img/icon-talk.png" alt="">《平度》</h4>
        </div>
        <Button type="primary" @click="rid=data.id;toFermentEventDetail()" shape="circle">详情</Button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FermentList',
    props: {
      data: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      toFermentEventDetail() {
        this.$router.push({
          path: '/clue/fermentEventDetail',
          query: {
            id: this.rid
          // platform:this.$props.data.platform
          }
        });
      }
    }
  };
</script>

<style lang="scss" >
.fermentList{
    padding:10px 40px 10px 30px;
    text-align: left;
    border-bottom:1px dashed #D1D1D1;
    display: flex;
    position: relative;
    background:white;
    // width: 1650px;
    margin:0 auto;
    h3{
      margin-bottom: 10px;
    }
    .pro{
      margin-bottom: 10px;
      width:1500px;
    }
    .tag{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width:1500px;
      .tag-a{
        display: flex;
        align-items: center;
        h4{
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 20px;
          img{
            margin-right:6px;
          }
        }
      }
      .ivu-btn{
        width: 99px;
        height: 55px;
        position: relative;
        background: url(../../assets/img/Button.png) no-repeat ;
        background-size: 100% 100%;
        color:white;
        border:none;
        outline:0;
        margin-left: 350px;
        &:hover{
          border:none;
        }
      }
      .ivu-btn:focus,.btn:active:focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn.active.focus {
                   outline: none;
                   border-color: transparent;
                   box-shadow:none;
      }
    }
    // .photo{
    //   width: 100px;
    //   display: flex;
    //   align-items: center;
    //   justify-content: center;
    //   margin-right: 10px;
    //   img{
    //     width: 50px;
    //     height: 50px;
    //   }
    // }
    .slot{
      position: absolute;
      top: 15px;
      right:50px;
      .tag-b{
        width: 30px;
        height:30px;
        background:#EFF7FD;
        color:#67A7D1;
        margin-left: 20px;
      }
    }
  }

</style>
