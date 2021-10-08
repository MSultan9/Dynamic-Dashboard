import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ details, data }) => {

  return (
    <div className={`chart-wrapper size-${details.size}`}>
      {data ?
        <>
          <h1 className='title'>Doughnut Chart</h1>
          <Doughnut data={data} />
        </>
        :
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      }
    </div>
  )
};

export default DoughnutChart;