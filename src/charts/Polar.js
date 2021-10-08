import React from 'react';
import { PolarArea } from 'react-chartjs-2';

const Polar = ({ details, data }) => {
    return (
        <div className={`chart-wrapper size-${details.size}`}>
            {data ?
                <>
                    <h1 className='title'>Polar Area Chart</h1>
                    <PolarArea data={data} />
                </>
                :
                <div className="loader-wrapper">
                    <div className="loader"></div>
                </div>
            }
        </div>
    )
};

export default Polar;