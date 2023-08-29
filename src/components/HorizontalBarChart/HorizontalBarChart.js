import React from 'react';
import './HorizontalBarChart.css'; // Create a CSS file for styling

const HorizontalBarChart = ({ data }) => {
  return (
    <section className="bar-section">
    <div className="bar-chart">
      {data.map((item, index) => (
        <div key={index} className="bar">
          <div className="bar-fill" style={{ width: `${item.percentage}%` }}>
            <span className="label">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default HorizontalBarChart;
