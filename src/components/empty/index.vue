<template>
  <div class="wrapper">
    <BlankSvg />
    数据为空
  </div>
</template>

<script>
  import BlankSvg from '@/assets/icon/blank.svg?inline';
  export default {
    name: 'Empty',
    components: {
      BlankSvg
    }
  };
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bolder;
    padding: 16px 0px;
    color: #ccc;
    background: #fff;
    height: 100px;

    svg {
      width: 56px;
      height: 56px;
      margin: 8px 0px;
    }
  }
</style>
