<template>
  <Dropdown placement="bottom-end" trigger="hover" @on-click="exit">
    <span class="user-dropdown">
      <img class="avatar" :src="userInfo.sysAvatar" alt="" />
      <span class="info">{{ userInfo.sysUserName }}</span>
      <span class="arrow"></span>
    </span>

    <template slot="list">
      <DropdownMenu>
        <DropdownItem name="setting">个人设置</DropdownItem>
        <DropdownItem name="exit">退出登录</DropdownItem>
      </DropdownMenu>
    </template>
  </Dropdown>
</template>

<script>
  import Modal from 'view-design/src/components/modal';
  export default {
    name: 'UserDropDown',
    data() {
      return {
        userInfo: {}
      };
    },
    created() {
      this.userInfo = { ...this.$store.getters.userInfo };
      // console.log(this.userInfo);
    },
    methods: {
      exit(e) {
        // console.log(e);
        if (e === 'exit') {
          Modal.confirm({
            title: '消息',
            content: '您确定要退出登录吗',
            okText: '确定',
            cancelText: '取消',
            onOk: () => {
              // return new Promise((resolve, reject) => {
              //   setTimeout(Math.random() > 0.5 ? resolve : reject, 1500)
              // }).catch(() => console.log('Oops errors!'))
              return this.$store.dispatch('Logout').then(() => {
                this.$router.push({ name: 'Login' });
              });
            },
            onCancel() {}
          });
        }
      }
    }
  };
</script>

<style lang="scss">
  @import '@/style/config.scss';
  .user-dropdown {
    display: flex;
    height: $header-height;
    min-width: 100px;
    padding: 0 10px 10px 10px;
    margin-left: 80px;
    overflow: hidden;
    font-size: 12px;
    cursor: pointer;
    align-items: center;
    color: $font-color-blue;

    .avatar {
      width: 32px;
      height: 32px;
      margin-right: 12px;
      border-radius: 50%;
    }

    .arrow {
      width: 0px;
      height: 0px;
      margin-left: 12px;
      margin-top: 6px;
      @include down-arrow($width: 6px, $color: $font-color-blue);
    }
  }
</style>
