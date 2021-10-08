

import React from 'react';
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

const data = [
  { name: 'Jack', age: 28, address: 'some where', key: '1' },
  { name: 'Rose', age: 36, address: 'some where', key: '2' },
];

const RcTable = ({ details }) => {
  return (
    <div className={`chart-wrapper size-${details.size}`}>
      <h1 className='title'>Data Grid</h1>
      <Table columns={columns} data={data} />
    </div>
  )
};

export default RcTable;