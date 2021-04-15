<template>
  <div class="wb-item-container">
    <div class="wb-item-wrapper">
      <slot></slot>
      <!-- 发消息的用户 -->
      <!-- <WBUser :avatar="dataSource.localAccountImg" :nickname="dataSource.accountName" :username="dataSource.account" :createdAt="dataSource.myTwTime" /> -->
      <!-- 发的消息文字内容 -->
      <!--
			<div class="wb-content">
			{{ dataSource.myFullText }}
			</div> -->
      <!-- 是转发的情况，这是被转发的内容 -->
      <!-- <WBComment v-if="dataSource.otherAccount" :showToolbar="true" :dataSource="dataSource" /> -->
      <!-- 图片内容 -->
      <!-- <WBImageList v-if="dataSource.localMyImageList" :dataSource="dataSource.localMyImageList" /> -->
      <!-- 视频内容 -->
      <!-- <WBVideo v-if="dataSource.videosUrl" :dataSource="dataSource" /> -->
      <!-- 外链内容 -->
      <!-- <WBLink v-if="dataSource.otherUrlText" :dataSource="dataSource" /> -->
      <!-- 三个按钮 -->
      <!-- <WBToolbar :support="dataSource.myFavoriteCount" :comment="dataSource.myReplyCount" :share="dataSource.myRetweetCount" /> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WBItem',
    props: {
      dataSource: {
        type: Object,
        default: () => {}
      }
    }
  };
</script>

<style lang="scss" scoped>
.wb-item-container{
	width: 100%;
	margin-bottom: 8px;
	animation: slowShow .5s linear 1;

	&:last-child{
		margin-bottom: 0px;
	}

	.wb-item-wrapper{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		background-color: #fff;
		border: #eeeeee 1xp solid;
		// box-shadow: 2px 2px 2px #eee;
		padding: 16px;
		padding-bottom: 0px;
		border-radius: 2px;
		opacity: 1;
		animation: slowHoverBack .4s linear;

		&:hover{
			box-shadow: 2px 2px 3px #ddd;
			animation: slowHover .4s linear;
		}

		.wb-content{
			width: 100%;
			box-sizing: border-box;
			padding: 8px 8px 8px 50px;
		}
	}
}

@keyframes slowShow {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes slowHover {
	from {
		box-shadow: 0px 0px 0px #eee;
	}
	to {
		box-shadow: 2px 2px 2px #ddd;
	}
}
@keyframes slowHoverBack {
	from {
		box-shadow: 2px 2px 2px #ddd;
	}
	to {
		box-shadow: none;
	}
}
</style>
