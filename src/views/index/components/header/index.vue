<template>
  <div class="header-wrapper">
    <img class="logo" :src="logo" alt="logo" />
    <div class="action">
      <UserDropDown />
      <Notify />
      <FullScreen style="margin-right: 32px" />
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
        logo: Logo
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/style/config.scss';
  .header-wrapper {
    position: relative;
    height: 99px;
    background: url(~@/assets/img/bg.png) no-repeat center 0;

    .logo {
      position: absolute;
      width: 394px;
      height: 64px;
      top: 50%;
      left: 50%;
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
      background: url('~@/assets/img/Top-r.png') no-repeat 10px -5px;
    }
  }
</style>
