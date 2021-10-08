import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ details, fetchOrder, setFetchOrder }) => {

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