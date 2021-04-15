<template>
  <div id="cloud-container" ref="cloudContainer" :style="oStyle"></div>
</template>

<script>
  import * as echarts from 'echarts';
  import 'echarts-wordcloud';
  import MixIn from './mixIn';

  // const dataSource=[{
  // 		name: 'python',
  // 		value: 5000
  // 	},{
  // 		name: 'java',
  // 		value: 6000
  // 	},
  //
  // ]
  const option = {
    tooltip: {},
    series: [
      {
        type: 'wordCloud',
        // 网格大小，各项之间间距
        gridSize: 30,
        // 形状 circle 圆，cardioid  心， diamond 菱形，
        // triangle-forward 、triangle 三角，star五角星
        shape: 'circle',
        // 字体大小范围
        sizeRange: [20, 50],
        // 文字旋转角度范围
        rotationRange: [0, 90],
        // 旋转步值
        rotationStep: 90,
        // 自定义图形
        // maskImage: maskImage,
        left: 'center',
        top: 'center',
        right: null,
        bottom: null,
        // 画布宽
        width: '90%',
        // 画布高
        height: '80%',
        // 是否渲染超出画布的文字
        drawOutOfBound: false,
        textStyle: {
          normal: {
            color: function () {
              return 'rgb(' + [Math.round(Math.random() * 200 + 55), Math.round(Math.random() * 200 + 55), Math.round(Math.random() * 200 + 55)].join(',') + ')';
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#2ac'
          }
        },
        data: [
          { name: '男神', value: 2.64 },
          { name: '好身材', value: 4.03 },
          { name: '校草', value: 24.95 },
          { name: '酷', value: 4.04 },
          { name: '时尚', value: 5.27 },
          { name: '阳光活力', value: 5.8 },
          { name: '初恋', value: 3.09 },
          { name: '英俊潇洒', value: 24.71 },
          { name: '霸气', value: 6.33 },
          { name: '腼腆', value: 2.55 },
          { name: '蠢萌', value: 3.88 },
          { name: '青春', value: 8.04 },
          { name: '网红', value: 5.87 },
          { name: '萌', value: 6.97 },
          { name: '认真', value: 2.53 },
          { name: '古典', value: 2.49 },
          { name: '温柔', value: 3.91 },
          { name: '有个性', value: 3.25 },
          { name: '可爱', value: 9.93 },
          { name: '幽默诙谐', value: 3.65 }
        ]
      }
    ]
  };
  export default {
    name: 'CloudWord',
    mixins: [MixIn],
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    watch: {
      data(newVal) {
        this.myChart = echarts.init(this.$refs.cloudContainer);
        option.series[0].data = newVal;
        this.myChart.setOption(option, true);
        this.myChart.resize();
      }
    },
    mounted() {
      this.myChart = echarts.init(document.getElementById('cloud-container'));
      this.myChart.setOption(option);
      // this.myChart.resize();
      setTimeout(() => {
        this.myChart.resize();
      }, 0);
    }
  };
</script>

<style lang="scss">
  .cloud-container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
</style>
