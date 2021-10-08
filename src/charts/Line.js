import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

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

const LineChart = ({ details, fetchOrder, setFetchOrder }) => {

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
                    <h1 className='title'>Line Chart</h1>
                    <Line data={data} options={options} />
                </>
                :
                <div className="loader-wrapper">
                    <div className="loader"></div>
                </div>
            }
        </div>
    )
};

export default LineChart;