<template>
  <div ref="pie"></div>
</template>
<script>
  import * as echarts from 'echarts';
  import _debounce from 'lodash.debounce';
  var option = {
    tooltip: {
      show: false
    },
    grid: {
      top: '10%',
      right: '30%',
      bottom: '10%',
      left: '30%'
    },
    series: [
      {
        name: '',
        type: 'pie',
        clockWise: false,
        center: ['50%', '50%'],
        radius: ['70%', '40%'],
        hoverAnimation: false,
        labelLine: {
          length: 50,
          length2: 20,
          show: true
        },
        label: {
          show: true,
          position: 'outside',
          color: '#666666',
          formatter: '{b}:{c}%'
        },
        data: []
      }
    ]
  };
  export default {
    name: 'Pie',
    data() {
      return {
        myChart: null
      };
    },
    props: {
      data: {
        type: Array,
        default: () => []
      },
      compId: {
        type: Number,
        default: 0
      }
    },
    watch: {
      data(newVal) {
        option.series[0].data = newVal;
        if (!this.myChart) {
          this.myChart = echarts.init(this.$refs.pie, 'light');
          console.log(this.myChart);
        }
        this.myChart.setOption(option);
      }
    },
    mounted() {
      this.addListener();
    },
    destroyed() {
      this.removeListener();
    },
    methods: {
      resizeChart: function () {
        return _debounce(() => {
          console.log('改变大小');
          if (this.myChart) {
            this.myChart.resize();
          }
        }, 500)();
      },
      addListener() {
        console.log(this.resizeChart);
        window.addEventListener('resize', this.resizeChart, false);
      },
      removeListener() {
        window.removeEventListener('resize', this.resizeChart, false);
      }
    }
  };
</script>
