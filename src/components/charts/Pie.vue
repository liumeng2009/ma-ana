<template lang="html">
  <div id="Pie-container" ref="pie" :style="oStyle"> </div>
</template>
<script>
  import * as echarts from 'echarts';
  import ChartMixin from '@/components/charts/mixIn';

  const color = ['#00D8FF', '#0077FF'];
  const names = ['行动类事件', '发酵类事件'];
  // const data = [54, 46];
  // const list = [];
  // let total = 0;
  // for (const i in data) {
  //     total += data[i];
  // }

  const placeHolderStyle = {
    normal: {
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      color: 'rgba(0, 0, 0, 0)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 0
    }
  };

  const rich = {
    white: {
      align: 'center',
      padding: [3, 0]
    }
  };

  // for (const i in data) {
  //     list.push({
  //         value: data[i],
  //         name: names[i],
  //         itemStyle: {
  //             normal: {
  //                 borderWidth: 5,
  //                 shadowBlur: 20,
  //                 borderColor: color[i],
  //                 shadowColor: color[i],
  //                 color: color[i]
  //             }
  //         }
  //     }, {
  //         value: total / 30,
  //         name: '',
  //         itemStyle: placeHolderStyle
  //     });
  // }

  // const func = (params) => {
  //     const percent = ((params.value / total) * 100).toFixed(1);
  //     const name = params.name.replace(/\n/g, '');
  //     if (params.name !== '') {
  //         return name + '\n{white|' + percent + '%}';
  //     } else {
  //         return '';
  //     }
  // };
  var option = {
    // backgroundColor: '#04243E',
    tooltip: {
      show: false
    },
    grid: {
      top: '10%',
      right: '10%',
      bottom: '10%',
      left: '10%'
    },
    legend: {
      orient: 'vertical',
      data: names,
      icon: '',
      left: 'center',
      top: '250px',
      textStyle: {
        color: '#9B9B9B',
        fontSize: 12
      }
    },
    series: [
      {
        name: '',
        type: 'pie',
        clockWise: false,
        startAngle: '40',
        center: ['50%', '50%'],
        radius: ['60%', '55%'],
        hoverAnimation: false,
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'outside',
              formatter: null,
              rich: rich
            },
            labelLine: {
              length: 20,
              length2: 60,
              show: true,
              color: '#00ffff'
            }
          }
        },
        data: [],
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return idx * 50;
        }
      },
      {
        name: '',
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['49%', '49%'],
        itemStyle: {
          color: 'transparant'
        },
        startAngle: '90',
        data: [
          {
            value: [],
            name: '',
            label: {
              normal: {
                show: true,
                formatter: '当日上报事件数：{c|{c}} {b|}',
                rich: {
                  c: {
                    color: '#9B9B9B',
                    fontSize: 16,
                    fontWeight: 'bold',
                    lineHeight: 5
                  },
                  b: {
                    color: 'rgb(98,137,169)',
                    fontSize: 16,
                    lineHeight: 5
                  }
                },
                textStyle: {
                  fontSize: 12,
                  fontWeight: 'bold'
                },
                position: 'center'
              }
            }
          }
        ]
      }
    ]
  };
  export default {
    name: 'Pie',
    mixins: [ChartMixin],
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    watch: {
      data(newVal) {
        // console.log(newVal)
        const data1 = newVal.slice(0, 2);
        // console.log(data1)
        const total = newVal[2];
        // console.log(total)
        const list = [];
        for (const i in data1) {
          list.push(
            {
              value: data1[i] !== 0 ? data1[i] : 1,
              name: names[i],
              itemStyle: {
                normal: {
                  borderWidth: 5,
                  shadowBlur: 20,
                  borderColor: color[i],
                  shadowColor: color[i],
                  color: color[i]
                }
              }
            },
            {
              value: total / 30,
              name: '',
              itemStyle: placeHolderStyle
            }
          );
        }
        option.series[0].data = list;
        option.series[1].total = total;
        option.series[0].itemStyle.normal.label.formatter = (params) => {
          let percent = ((params.value / total) * 100).toFixed(1);
          if (total === 0) {
            percent = 0;
          }
          const name = params.name.replace(/\n/g, '');
          if (params.name !== '') {
            return name + '\n{white|' + percent + '%}';
          } else {
            return '';
          }
        };
        option.series[1].data[0].value = [total];
        var myChart = echarts.init(document.getElementById('Pie-container'));
        myChart.setOption(option);
      }
    },

    mounted() {
      // var myChart = echarts.init(document.getElementById('Pie-container'));
      // myChart.setOption(option);
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
  #Pie-container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
</style>
