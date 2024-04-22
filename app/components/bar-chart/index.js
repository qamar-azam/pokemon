'use client';

import Chart from 'react-apexcharts';

function BarChart({ pokemon }) {
  const xAxis = pokemon?.stats?.map((stats) => stats.stat.name);
  const yAxis = pokemon?.stats?.map((stats) => stats.base_stat);

  const options = {
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: xAxis
    }
  };
  const series = [
    {
      name: 'stats',
      data: yAxis
    }
  ];
  return <Chart options={options} series={series} type='bar' width='500' />;
}

export default BarChart;
