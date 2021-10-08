

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

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

const GroupedBar = ({ details, setFetchOrder, fetchOrder }) => {

  const [data, setData] = useState();

  useEffect(() => {
    if (details.priority === fetchOrder)
      setTimeout(() => {
        fetch(`/data/${details.source}`)
          .then(res => res.json())
          .then(data => setData(data))
          .finally(() => setFetchOrder(order => order + 1))
      }, 500);
  }, [fetchOrder, details, setFetchOrder])

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