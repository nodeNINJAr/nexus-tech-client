import { Table } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../shared/loader/Spinner';

const PaymentHistoryTable = ({payHistory,isLoading}) => {
    //
    const columns = [
        {
          title: "Month Of Salary",
          key: "month",
          render: (_, record) => <p>{record?.month}</p>,
        },
        {
          title: "Year Of Salary",
          key: "year",
          render: (_, record) => <p>{record?.year}</p>,
        },
        {
          title: "Amount",
          key: "salary",
          render: (_, record) => <p className="font-rubik font-normal capitalize">{record?.salary} $</p>,
        },
        {
            title: "Transaction Id",
            key: "paymentIntentId",
            render: (_, record) => <p>{record?.paymentIntentId}</p>,
          },
       ]
      //
      if (isLoading) return <Spinner />;
      //
      return (
        <>
          <Table
            className="whitespace-nowrap"
            columns={columns}
            pagination={{
              position: ["bottomRight"],
            }}
            dataSource={payHistory}
            rowKey="_id"
          />
        </>
      );
};
PaymentHistoryTable.propTypes = {
  payHistory: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default PaymentHistoryTable;
