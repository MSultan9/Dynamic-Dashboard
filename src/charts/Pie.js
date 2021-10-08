import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ details, data }) => {
    return (
        <div className={`chart-wrapper size-${details.size}`}>
            {data ?
                <>
                    <h1 className='title'>Pie Chart</h1>
                    <Pie data={data} />
                </>
                :
                <div className="loader-wrapper">
                    <div className="loader"></div>
                </div>
            }
        </div>
    )
};

export default PieChart;