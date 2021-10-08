import React, { useEffect, useState } from 'react';
import { PolarArea } from 'react-chartjs-2';

const Polar = ({ details, fetchOrder, setFetchOrder }) => {

    const [data, setData] = useState();

    useEffect(() => {
        if (details.priority === fetchOrder)
            setTimeout(() => {
                fetch(`/data/${details.source}`)
                    .then(res => res.json())
                    .then(data => {
                        setData(data)
                        setFetchOrder(order => order + 1)
                    })
            }, 500);
    }, [fetchOrder, details, setFetchOrder])

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