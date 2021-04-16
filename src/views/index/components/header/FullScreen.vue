<template>
  <Tooltip :content="getTitle" placement="bottom" :delay="0.5">
    <div class="full-icon" @click="toggleFullscreen">
      <div class="wrapper">
        <FullEnterSvg v-if="!isFullscreen" />
        <FullExitSvg v-else />
      </div>
    </div>
  </Tooltip>
</template>
<script>
  import FullEnterSvg from '@/assets/icon/fullscreen-enter.svg?inline';
  import FullExitSvg from '@/assets/icon/fullscreen-exit.svg?inline';
  export default {
    name: 'FullScreen',
    components: { FullEnterSvg, FullExitSvg },
    data() {
      return {
        isFullscreen: false,
        RFC_METHOD_NAME: 'requestFullscreen',
        EFS_METHOD_NAME: 'exitFullscreen',
        FSE_PROP_NAME: 'fullscreenElement'
      };
    },
    created() {
      // console.log(FullEnterSvg);
      this.initFullScreen();
    },
    methods: {
      initFullScreen() {
        const el = document.documentElement;
        if ('webkitRequestFullScreen' in el) {
          this.RFC_METHOD_NAME = 'webkitRequestFullScreen';
          this.EFS_METHOD_NAME = 'webkitExitFullscreen';
          this.FSE_PROP_NAME = 'webkitFullscreenElement';
        } else if ('msRequestFullscreen' in el) {
          this.RFC_METHOD_NAME = 'msRequestFullscreen';
          this.EFS_METHOD_NAME = 'msExitFullscreen';
          this.FSE_PROP_NAME = 'msFullscreenElement';
        } else if ('mozRequestFullScreen' in el) {
          this.RFC_METHOD_NAME = 'mozRequestFullScreen';
          this.EFS_METHOD_NAME = 'mozCancelFullScreen';
          this.FSE_PROP_NAME = 'mozFullScreenElement';
        } else if (!('requestFullscreen' in el)) {
          throw new Error('当前浏览器不支持Fullscreen API !');
        }
      },
      enterFullScreen() {
        this.isFullscreen = true;
        const target = document.documentElement;
        // console.log(this.RFC_METHOD_NAME);
        target[this.RFC_METHOD_NAME]();
      },
      exitFullScreen() {
        this.isFullscreen = false;
        // console.log(this.EFS_METHOD_NAME);
        document[this.EFS_METHOD_NAME]();
      },
      toggleFullscreen() {
        if (this.isFullscreen) {
          this.exitFullScreen();
        } else {
          this.enterFullScreen();
        }
      }
    },
    computed: {
      getTitle() {
        return this.isFullscreen ? '退出全屏' : '全屏';
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/style/config.scss';
  .full-icon {
    display: flex;
    padding: 0px 2px;
    padding-bottom: 10px;
    height: $header-height;
    align-items: center;

    .wrapper {
      display: flex;
      width: 24px;
      height: 24px;
      padding: 2px;
      border: 2px solid $primary-color;
      cursor: pointer;

      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
</style>
