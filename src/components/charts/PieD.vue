<template lang="html">
  <div id="PieD-container" ref="pie" :style="oStyle"> </div>
</template>
<script>
  import * as echarts from 'echarts';
  import ChartMixin from './mixIn';

  const color = ['#EA8E58', '#1547C7', '#32D5FC'];

  // const xAxisData = ['6', '7', '8'];
  // const yAxisData1 = [100, 138, 350];
  // const yAxisData2 = [233, 333, 200];
  // const yAxisData3 = [333, 133, 300];

  const hexToRgba = (hex, opacity) => {
    let rgbaColor = '';
    const reg = /^#[\da-f]{6}$/i;
    if (reg.test(hex)) {
      rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt(
        '0x' + hex.slice(3, 5)
      )},${parseInt('0x' + hex.slice(5, 7))},${opacity})`;
    }
    return rgbaColor;
  };

  var option = {
    backgroundColor: '#fff',
    color: color,
    legend: {
      top: 20
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        let html = '';
        params.forEach((v) => {
          html += `<div style="color: #666;font-size: 14px;line-height: 24px">
            <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;
              background-color:${color[v.componentIndex]};">
            </span>
              ${v.seriesName}.${v.name}
            <span style="color:${color[v.componentIndex]};
              font-weight:700;font-size: 18px;margin-left:5px"
            >
              ${v.value}
            </span>万元
            `;
        });
        return html;
      },
      extraCssText:
        'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: '#ffffff',
          shadowColor: 'rgba(225,225,225,1)',
          shadowBlur: 5
        }
      }
    },
    grid: {
      top: 100,
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#333'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#D9D9D9'
          }
        },
        data: []
      }
    ],
    yAxis: [
      {
        type: 'value',
        // name: '单位（万/亿KWh）',
        axisLabel: {
          textStyle: {
            color: '#666'
          }
        },
        nameTextStyle: {
          color: '#666',
          fontSize: 12,
          lineHeight: 40
        },
        // 分割线
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#E9E9E9'
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        // name: "2018",
        name: '事件总数',
        type: 'line',
        // smooth: true,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
          normal: {
            color: color[0],
            shadowBlur: 3,
            shadowColor: hexToRgba(color[0], 0.5),
            shadowOffsetY: 8
          }
        },
        symbol: 'circle', // 数据交叉点样式
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: hexToRgba(color[0], 0.3)
                },
                {
                  offset: 1,
                  color: hexToRgba(color[0], 0.1)
                }
              ],
              false
            ),
            shadowColor: hexToRgba(color[0], 0.1),
            shadowBlur: 10
          }
        },
        data: []
      },
      {
        name: '行动类事件总数',
        type: 'line',
        // smooth: true,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
          normal: {
            color: color[1],
            shadowBlur: 3,
            shadowColor: hexToRgba(color[1], 0.5),
            shadowOffsetY: 8
          }
        },
        symbol: 'circle', // 数据交叉点样式 (实心点)
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: hexToRgba(color[1], 0.3)
                },
                {
                  offset: 1,
                  color: hexToRgba(color[1], 0.1)
                }
              ],
              false
            ),
            shadowColor: hexToRgba(color[1], 0.1),
            shadowBlur: 10
          }
        },
        data: []
      },
      {
        // name: "2018",
        name: '发酵类事件总数',
        type: 'line',
        // smooth: true,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
          normal: {
            color: color[2],
            shadowBlur: 3,
            shadowColor: hexToRgba(color[2], 0.5),
            shadowOffsetY: 8
          }
        },
        symbol: 'circle', // 数据交叉点样式
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: hexToRgba(color[2], 0.3)
                },
                {
                  offset: 1,
                  color: hexToRgba(color[2], 0.1)
                }
              ],
              false
            ),
            shadowColor: hexToRgba(color[2], 0.1),
            shadowBlur: 10
          }
        },
        data: []
      }
    ]
  };
  export default {
    name: 'PieD',
    mixins: [ChartMixin],
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    watch: {
      data(newVal) {
        // console.log(newVal);
        const data1 = newVal[0];
        const date = [];
        const action = [];
        data1.forEach((item) => {
          date.push(item.month);
          action.push(item.count);
        });
        const data2 = newVal[1];
        const ferment = [];
        data2.forEach((item) => {
          ferment.push(item.count);
        });
        const data3 = newVal[2];
        const total = [];
        data3.forEach((item) => {
          total.push(item.count);
        });
        // console.log(total);
        option.xAxis[0].data = date;
        option.series[0].data = total;
        option.series[1].data = action;
        option.series[2].data = ferment;
        var myChart = echarts.init(document.getElementById('PieD-container'));
        myChart.setOption(option);
      }
    },
    mounted() {
      var myChart = echarts.init(document.getElementById('PieD-container'));
      myChart.setOption(option);
    }
  };
</script>

<style lang="scss" scoped>
  #PieD-container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
</style>
