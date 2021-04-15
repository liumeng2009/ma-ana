<template>
  <div class="header-notify">
    <Poptip title="" trigger="click" :overlayClassName="'overlay'">
      <Badge :count="count" dot :class="'badge'">
        <Icon type="ios-notifications" />
      </Badge>
      <template #content>
        <h1>放一些提醒信息</h1>
      </template>
    </Poptip>
  </div>
</template>

<script>
  export default {
    name: 'HeaderNotify',
    data() {
      return {
        count: 5
      };
    }
  };
</script>

<style lang="scss">
  @import '@/style/config.scss';
  .header-notify {
    display: flex;
    align-items: center;
    height: $header-height;
    padding-bottom: 8px;
    cursor: pointer;

    .overlay {
      max-width: 360px;
    }

    span[role='img'] {
      font-size: 16px;
    }

    .badge {
      color: $font-color-blue;
      font-size: 24px;
      height: $header-height;
      padding: 31px 0px;
      .ivu-badge-dot {
        width: 8px;
        height: 8px;
        top: 35px;
      }
    }
  }
</style>
