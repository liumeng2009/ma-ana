<template>
  <div class="video-wrapper">
    <img :src="thumbnail" :alt="title" />
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
  export default {
    name: 'WBVideo',
    props: {
      thumbnail: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style lang="scss" scoped>
.video-wrapper {
  width: 100%;
  padding: 8px;
  // padding-left: 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: auto;
    max-height: 300px;
  }

  .title {
    margin-top: 8px;
    font-weight: bolder;
  }
}
</style>
