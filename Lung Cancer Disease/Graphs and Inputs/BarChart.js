import Plot from 'react-plotly.js';

const BarChart = ({labels, lungcancerData, title, xtitle, ytitle }) => {
  const plotData = [
    {
      x: labels,
      y: lungcancerData,
      type: 'bar',
    },
  ];

  const layout = {
    title: title,
    xaxis: { title: xtitle },
    yaxis: { title: ytitle },
  };

  return (
    <Plot
      data={plotData}
      layout={layout}
      style={{width: "500px", age: "300px", margin: "20px"}}
    />
  );
};

export default BarChart;