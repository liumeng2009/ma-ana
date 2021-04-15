<template>
  <div class="toolbar">
    <div>
      <Icon type="ios-thumbs-up-outline" size="24" />
      <span>{{ support }}</span>
    </div>
    <div>
      <Icon type="ios-text-outline" size="24" />
      <span>{{ comment }}</span>
    </div>
    <div>
      <Icon type="ios-share-outline" size="24" />
      <span>{{ share }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WBToolbar',
    props: {
      support: {
        type: [Number, String],
        default: 0
      },
      comment: {
        type: [Number, String],
        default: 0
      },
      share: {
        type: [Number, String],
        default: 0
      }
    }
  };
</script>

<style lang="scss" scoped>
  .toolbar {
    width: 100%;
    height: 42px;
    display: flex;
    border-top: #e8e8e8 1px solid;

    & > div {
      position: relative;
      width: 33%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      & > i {
        color: #888888;
        margin-right: 8px;
      }
    }
  }
</style>
