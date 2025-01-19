import React, { useState } from "react";
import PropTypes from "prop-types";
import Spinner from "../shared/loader/Spinner";
import { message, Space, Spin, Table } from "antd";
import useAxiosSecure from "../hooks/useAxiosSecure";

// 
const PayRequestsTable = ({ payRequests, isLoading, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(null)
  //
  const columns = [
    {
      title: "Name",
      dataIndex: "employeeName",
      key: "employeeName",
    },
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
      title: "Pay Date",
      key: "year",
      render: (_, record) => <p className={`${record?.paidAt?"text-gray-700": "text-gray-400"}`}>{record?.paidAt?record?.paidAt:"Not Yet"}</p>,
    },
    {
      title: "Pay Status",
      key: "status",
      render: (_, record) => <p className="font-rubik font-normal capitalize text-gray-600">{record?.status==="approved"? "Approved ✅" :record?.status} </p>,
    },
    {
      title: "Pay",
      key: "pay",
      render: (_, record) => (
        <Space size="middle" key={record.key}>
          <button
            onClick={() => handlePayConfirm(record)}
            disabled={record?.status==="approved"}
            className={`${
              record?.status==="approved" && "text-gray-300"
            } bg-[#F6FFED] text-[#29ec2f] border border- rounded-lg px-4 py-1 font-normal font-rubik capitalize`}
          >
              {loading === record?._id ? <Spin size="small" />: record?.status==="approved"?"paid":"pay"}
          </button>
        </Space>
      ),
    },
  ];

  // handlePayConfirm
  const handlePayConfirm = async (record) => {
    setLoading(record._id)
    const { data } = await axiosSecure.post("/approve-pay-request", {paymentRequestId:record?._id});
    if(data?.status==="paid"){
      refetch()
      setLoading(loading)
      message.success(`${record?.employeeName}'s payment for ${record?.month} ${record?.year} successfully processed by admin!`);
    }
    
  };

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
        dataSource={payRequests}
        rowKey="_id"
      />
    </>
  );
};
PayRequestsTable.propTypes = {
  payRequests: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  refetch: PropTypes.func,
};

export default PayRequestsTable;

