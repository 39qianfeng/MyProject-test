<template>
  <div ref="chartRef" :style="{ width: '600px', height: '400px' }"></div>
</template>

<script>
import * as echarts from 'echarts';
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'LineChart',
  setup() {
    const chartRef = ref(null);
    let myChart = null;

    const initChart = () => {
      // 初始化图表
      myChart = echarts.init(chartRef.value);

      // 图表配置项
      const option = {
        title: {
          text: '折线图示例'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['销售量']
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '销售量',
          type: 'line',
          data: [120, 132, 101, 134, 90, 230, 210],
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          markLine: {
            data: [
              { type: 'average', name: '平均值' }
            ]
          }
        }]
      };

      // 使用刚指定的配置项和数据显示图表
      myChart.setOption(option);
    };

    onMounted(() => {
      initChart();
      window.addEventListener('resize', myChart.resize); // 监听窗口大小变化
    });

    onBeforeUnmount(() => {
      myChart.dispose(); // 组件销毁时释放资源
      window.removeEventListener('resize', myChart.resize);
    });

    return {
      chartRef
    };
  }
};
</script>

<style scoped>
/* 可以添加样式 */
</style>
