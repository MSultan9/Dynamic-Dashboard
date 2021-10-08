

import React from 'react';
import Table from 'rc-table';


const RcTable = ({ details, data }) => {

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

  return (
    <div className={`chart-wrapper size-${details.size}`}>
      {data ?
        <>
          <h1 className='title'>Data Grid</h1>
          <Table columns={columns} data={data} />
        </>
        :
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      }
    </div>
  )
};

export default RcTable;