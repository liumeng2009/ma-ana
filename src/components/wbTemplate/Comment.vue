<template>
  <div class="comment-wrapper">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'WBComment'
  };
</script>

<style lang="scss" scoped>
.comment-wrapper{
    background-color: #eee;
    border-radius: 3px;
    box-sizing: border-box;
    margin: 0px 0px 16px 16px;
    padding: 16px;
}
</style>
