import Plot from 'react-plotly.js';
const PieChart = ({lungcancerData, title, labels}) =>{

    const data = [
        {
          values: lungcancerData,
          labels: labels,
          type: 'pie',
        },
      ];

    const layout = {
        title: title,
      };
    
    return (
        <Plot
            data={data}
            layout={layout}
            style={{width: "500px", age: "300px", margin: "20px"}}
        />
    );

};

export default PieChart;