<template>
  <div class="content">
    {{ content }}
  </div>
</template>

<script>
  export default {
    name: 'WBContent',
    props: {
      content: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  padding: 8px 8px 8px 40px;
  text-align: left;
}
</style>
