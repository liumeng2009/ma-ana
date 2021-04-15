<template lang="html">
  <div id="PieE-container" ref="pie" :style="oStyle"> </div>
</template>
<script>
  import * as echarts from 'echarts';
  import ChartMixin from './mixIn';

  var seriesData = [
    {
      name: '科技',
      value: '20'
    },
    {
      name: '教育',
      value: '10'
    },
    {
      name: '财经',
      value: '50'
    },
    {
      name: '体育',
      value: '10'
    },
    {
      name: '旅游',
      value: '10'
    }
  ];
  var legendData = ['科技', '教育', '财经', '体育', '旅游'];
  var colorList = ['#00C4FA', '#FDC013', '#73B7FF', '#F33F3E', '#3E88F0'];
  const option = {
    // backgroundColor: {
    //     type: 'linear',
    //     x: 0,
    //     y: 0,
    //     x2: 1,
    //     y2: 1,
    //     colorStops: [{
    //         offset: 0,
    //         color: '#0f2c70' // 0% 处的颜色
    //     }, {
    //         offset: 1,
    //         color: '#091732' // 100% 处的颜色
    //     }],
    //     globalCoord: false // 缺省为 false
    // },
    // title: {
    //     text: '品种',
    //     x: 'center',
    //     y: 'center',
    //     textStyle: {
    //         color: '#A4A4A4'
    //     }
    // },
    tooltip: {
      trigger: 'item',
      borderColor: 'rgba(255,255,255,.3)',
      backgroundColor: 'rgba(13,5,30,.6)',
      borderWidth: 1,
      padding: 5,
      formatter: function (parms) {
        var str =
          parms.marker +
          '' +
          parms.data.name +
          '</br>' +
          '数量：' +
          parms.data.value +
          '头</br>' +
          '占比：' +
          parms.percent +
          '%';
        return str;
      }
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      left: 'right',
      align: 'auto',
      top: 'bottom',
      textStyle: {
        color: '#A4A4A4'
      },
      data: legendData
    },
    series: [
      {
        type: 'pie',
        z: 3,
        center: ['50%', '50%'],
        radius: ['25%', '45%'],
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
            //     backgroundColor: '#A4A4A4',
            //     borderRadius: 3,
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
            length: 15,
            length2: 20,
            lineStyle: {
              width: 1,
              color: '#E6E6E6'
            }
          }
        },
        data: seriesData
      }
      // {
      //     name:'第一层环',
      //     type: 'pie',
      //     z: 2,
      //     tooltip:{
      //         show:false
      //     },
      //     center: ['50%', '50%'],
      //     radius: ['45%', '58%'],
      //     hoverAnimation: false,
      //     clockWise: false,
      //     itemStyle: {
      //         normal: {
      //             // shadowBlur: 40,
      //             // shadowColor: 'rgba(0, 255, 255,.3)',
      //             color: 'rgba(1,15,80,.4)',
      //         },
      //         emphasis:{
      //             color: 'rgba(1,15,80,.4)',
      //         }
      //     },
      //     label: {
      //         show: false
      //     },
      //     data: [100]
      // },
      // {
      //     name:'第二层环',
      //     type: 'pie',
      //     z: 1,
      //     tooltip:{
      //         show:false
      //     },
      //     center: ['50%', '50%'],
      //     radius: ['58%', '76%'],
      //     hoverAnimation: false,
      //     clockWise: false,
      //     itemStyle: {
      //         normal: {
      //             // shadowBlur: 40,
      //             // shadowColor: 'rgba(0, 255, 255,.3)',
      //             color: 'rgba(0,15,69,.2)',
      //         },
      //         emphasis:{
      //             color: 'rgba(0,15,69,.2)',
      //         }
      //     },
      //     label: {
      //         show: false
      //     },
      //     data: [100]
      // }
    ]
  };
  export default {
    name: 'PieE',
    mixins: [ChartMixin],
    mounted() {
      var myChart = echarts.init(document.getElementById('PieE-container'));
      myChart.setOption(option);
    }
  };
</script>

<style lang="scss" scoped>
  #PieE-container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
</style>
