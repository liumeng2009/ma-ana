<template lang="html">
  <div id="Histogram-container" ref="pie" :style="oStyle"> </div>
</template>
<script>
  import * as echarts from 'echarts';
  import ChartMixin from './mixIn';

  const data = [220, 182, 191, 234, 290, 330];
  const sideData = data.map((item) => item + 4.5);

  const option = {
    // backgroundColor: "#041730",
    tooltip: {
      trigger: 'axis',
      formatter: '{b} : {c}',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    xAxis: {
      data: ['一月', '二月', '三月', '四月', '五月', '六月'],
      // 坐标轴
      axisLine: {
        lineStyle: {
          color: '#3eb2e8'
        }
      },
      // 坐标值标注
      axisLabel: {
        show: true,
        textStyle: {
          color: 'blue'
        }
      }
    },
    yAxis: {
      // 坐标轴
      axisLine: {
        show: false
      },
      // 坐标值标注
      axisLabel: {
        show: true,
        textStyle: {
          color: 'blue'
        }
      },
      // 分格线
      splitLine: {
        lineStyle: {
          color: '#4784e8'
        }
      }
    },
    series: [
      {
        name: 'a',
        tooltip: {
          show: false
        },
        type: 'bar',
        barWidth: 24.5,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              1,
              0,
              0,
              [
                {
                  offset: 0,
                  color: '#0B4EC3' // 0% 处的颜色
                },
                {
                  offset: 0.6,
                  color: '#138CEB' // 60% 处的颜色
                },
                {
                  offset: 1,
                  color: '#17AAFE' // 100% 处的颜色
                }
              ],
              false
            )
          }
        },
        data: data,
        barGap: 0
      },
      {
        type: 'bar',
        barWidth: 8,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              1,
              0,
              0,
              [
                {
                  offset: 0,
                  color: '#09337C' // 0% 处的颜色
                },
                {
                  offset: 0.6,
                  color: '#0761C0' // 60% 处的颜色
                },
                {
                  offset: 1,
                  color: '#0575DE' // 100% 处的颜色
                }
              ],
              false
            )
          }
        },
        barGap: 0,
        data: sideData
      },
      {
        name: 'b',
        tooltip: {
          show: false
        },
        type: 'pictorialBar',
        itemStyle: {
          borderWidth: 1,
          borderColor: '#0571D5',
          color: '#1779E0'
        },
        symbol: 'path://M 0,0 l 120,0 l -30,60 l -120,0 z',
        symbolSize: ['30', '5'],
        symbolOffset: ['0', '-5'],
        // symbolRotate: -5,
        symbolPosition: 'end',
        data: data,
        z: 3
      }
    ]
  };
  export default {
    name: 'Histogram',
    mixins: [ChartMixin],
    mounted() {
      var myChart = echarts.init(document.getElementById('Histogram-container'));
      myChart.setOption(option);
    }
  };
</script>

<style lang="scss" scoped>
  #Histogram-container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
</style>
