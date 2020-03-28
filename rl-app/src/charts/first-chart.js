import React, { useEffect, useMemo } from 'react';
import echarts from 'echarts';

const FirstChart = () => {
  const myChart = useMemo(() => {
    echarts.init(document.getElementById('first-echart'));

    // specify chart configuration item and data
    const option = {
      title: {
        text: 'ECharts entry example'
      },
      tooltip: {},
      legend: {
        data: ['Sales']
      },
      xAxis: {
        data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks']
      },
      yAxis: {},
      series: [
        {
          name: 'Sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    };
    // use configuration item and data specified to show chart
    myChart.setOption(option);
  }, []);
  return <div id='first-echart' style='width: 600px;height:400px;'></div>;
};
export default FirstChart;
