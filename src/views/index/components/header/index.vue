<template>
  <div class="header-wrapper">
    <div class="title">{{ title }}</div>
    <div class="action">
      <UserDropDown />
    </div>
  </div>
</template>

<script>
  import FullScreen from './FullScreen';
  import Notify from './Notify';
  import UserDropDown from './userDropdown';
  import Logo from '@/assets/img/logo.png';
  export default {
    name: 'CusHeader',
    components: {
      FullScreen,
      Notify,
      UserDropDown
    },
    data() {
      return {
        title: process.env.VUE_APP_MA_TITLE,
        logo: Logo
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/style/config.scss';
  .header-wrapper {
    position: relative;
    height: $header-height;
    background: #232f6d;

    .title {
      font-family: 幼圆;
      font-size: 18px;
      color: #3793eb;
      padding-left: 54px;
      line-height: $header-height;
    }

    .logo {
      position: absolute;
      width: 394px;
      height: 64px;
      top: 50%;
      transform: translate(-182px, -32px);
    }
    .action {
      position: absolute;
      height: $header-height;
      right: 0px;
      top: 0px;
      display: flex;
      min-width: 370px;
      padding-right: 12px;
      align-items: center;
      flex-direction: row-reverse;
    }
  }
</style>
