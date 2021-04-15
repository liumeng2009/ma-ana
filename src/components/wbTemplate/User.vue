<template>
  <div class="user">
    <Avatar :src="avatar" icon="ios-person" />
    <div class="username">
      <span>{{ nickname }}{{ username ? `(${username})` : "" }}</span>
      <span>{{ createdAt }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WBUser',
    props: {
      avatar: {
        type: String,
        default: ''
      },
      nickname: {
        type: String,
        default: ''
      },
      username: {
        type: String,
        default: ''
      },
      createdAt: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style lang="scss" scoped>
.user {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;

  & > img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  .username {
    height: 100%;
    line-height: 25px;
    display: flex;
    flex-direction: column;
    margin-left: 8px;

    & span {
        height: 50%;
        overflow: hidden;
    }

    & span:nth-of-type(1) {
      font-size: 14px;
      font-weight: bolder;
    }

    & span:nth-of-type(2) {
      font-size: 12px;
      color:#aaaaaa;
      text-align:left;
    }
  }

  .createdAt {
    height: 25px;
    font-size: 12px;
    line-height: 25px;
    color: #ccc;
  }
}
</style>
