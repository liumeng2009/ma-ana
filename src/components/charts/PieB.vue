<template lang="html">
  <div ref="pie" :style="oStyle"> </div>
</template>
<script>
  import * as echarts from 'echarts';
  import ChartMixin from './mixIn';

  var colorList = ['#4185F4', '#00C9F2', '#70AFFF', '#FCAD0E'];
  // var arr = [
  //   { value: 123, name: 'YouTube' },
  //   { value: 102, name: 'Facebook' },
  //   { value: 122, name: 'Twitter' },
  //   { value: 137, name: '反动网站' }
  // ];
  // setInterval("function()",1000)
  var option = {
    color: colorList,
    title: {
      // text: 'PM2.5含量',
      // subtext:'50%',
      x: 'center',
      y: 'center',
      textStyle: {
        color: '#fff',
        fontSize: 15
      },
      grid: {
        x: 20,
        y: 45,
        x2: 5,
        y2: 20,
        borderWidth: 1
      }
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['44%', '55%'],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
          normal: {
            color: function (params) {
              return colorList[params.dataIndex];
            }
          }
        },
        label: {
          show: true,
          position: 'outside',
          formatter: '{a|{b}：{d}%}\n{hr|}',
          rich: {
            // hr: {
            //     backgroundColor: 't',
            //     borderRadius: 0,
            //     width: 3,
            //     height: 3,
            //     padding: [3, 3, 0, -12]
            // },
            a: {
              padding: [-30, 15, -20, 15]
            }
          }
        },
        labelLine: {
          normal: {
            length: 20,
            length2: 20,
            lineStyle: {
              width: 1,
              color: '#E6E6E6'
            }
          }
        },
        data: []
      }
    ]
  };
  export default {
    name: 'PieB',
    mixins: [ChartMixin],
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    watch: {
      data(newVal) {
        option.series[0].data = newVal;
        this.myChart = echarts.init(this.$refs.pie);
        this.myChart.setOption(option);
        this.myChart.resize();
      }
    },
    mounted() {
      this.myChart = echarts.init(this.$refs.pie);
      this.myChart.setOption(option);
    },
    methods: {
      /*
      function() {
          for (const index in arr) {
              arr[index].value = (Math.random() * 50 + 100).toFixed(0);
          }
          myChart.setOption({
              series: [{
                  data: arr
              }]
          });
      }
  */
    }
  };
</script>

<style lang="scss" scoped>
  #PieB-container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
</style>
