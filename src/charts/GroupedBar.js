

import React from 'react';
import { Bar } from 'react-chartjs-2';

const GroupedBar = ({ details, data }) => {

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className={`chart-wrapper size-${details.size}`}>
      {data ?
        <>
          <h1 className='title'>Grouped Bar Chart</h1>
          <Bar data={data} options={options} />
        </>
        :
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      }
    </div>
  )
};

export default GroupedBar;