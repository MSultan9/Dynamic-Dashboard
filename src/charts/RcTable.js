

import React, { useEffect, useState } from 'react';
import Table from 'rc-table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }
];

const RcTable = ({ details, fetchOrder, setFetchOrder }) => {

  const [data, setData] = useState();

  useEffect(() => {
    if (details.priority === fetchOrder)
      setTimeout(() => {
        fetch(`/data/${details.source}`)
          .then(res => res.json())
          .then(data => {
            setData(data.employees)
            setFetchOrder(order => order + 1)
          })
      }, 500);
  }, [fetchOrder, details, setFetchOrder])

  return (
    <div className={`chart-wrapper size-${details.size}`}>
      {data ?
        <Table columns={columns} data={data} />
        :
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      }
    </div>
  )
};

export default RcTable;