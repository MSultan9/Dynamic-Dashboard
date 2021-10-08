import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ details, data }) => {

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