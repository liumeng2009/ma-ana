<template>
  <div class="images-wrapper">
    <div class="image" v-fix-height :style="{ width: ( 100 / columnCount ) + '%' }" v-for="(item, index) in imageList" :key="index">
      <div class="img">
        <img :src="item" v-image-load v-image-size />
      </div>
    </div>
  </div>

</template>

<script>
  import { ImageSize, FixHeight, ImageLoad } from '@/core/directives';

  export default {
    name: 'WBImageList',
    directives: {
      FixHeight,
      ImageSize,
      ImageLoad
    },
    data () {
      return {
        columnCount: 0
      };
    },
    props: {
      imageList: {
        type: Array,
        default: () => []
      }
    },
    watch: {
      imageList: {
        immediate: true,
        handler (newVal) {
          const _len = newVal.length;
          switch (_len) {
          case 1:
            this.columnCount = 1;
            break;
          case 2:
            this.columnCount = 2;
            break;
          default:
            this.columnCount = 3;
            break;
          }
        }
      }
    },
    methods: {
      imgLoaded (e) {
        const img = e.srcElement.parentElement.children[0];
        img.src = e.srcElement.src;
      },
      imgLoadFailed (e) {
        const img = e.srcElement.parentElement.children[0];
        img.src = require('@/assets/img/load-failed.png');
      }
    }
  };
</script>

<style lang="scss" scoped>
	.images-wrapper{
		max-width: 600px;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		// padding-left: 58px;
		padding-bottom: 4px;
		margin: auto;

		.image {
			box-sizing: border-box;
			padding: 4px;
			display: flex;
			justify-self: center;
			align-items: center;
			overflow: hidden;

			.img {
				width: 100%;
				height: 100%;
				overflow: hidden;
				display: flex;
				justify-content: center;
				align-items: center;

				img {
					width:100%
				}
			}
		}
	}
</style>
