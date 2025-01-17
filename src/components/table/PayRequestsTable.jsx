import React from "react";
import Spinner from "../shared/loader/Spinner";
import { Space, Table } from "antd";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const PayRequestsTable = ({ payRequests, isLoading, refetch }) => {
  const axiosSecure = useAxiosSecure();
  //
  const columns = [
    {
      title: "Name",
      dataIndex: "userName",
      key: "userName",
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
      title: "Pay Status",
      key: "status",
      render: (_, record) => <p>{record?.status}</p>,
    },
    {
      title: "Pay",
      key: "pay",
      render: (_, record) => (
        <Space size="middle" key={record.key}>
          <button
            onClick={() => handlePayConfirm(record)}
            // disabled={!record?.isVerified}
            className={`${
              !record?.isVerified && "text-gray-300"
            } bg-[#F6FFED] text-[#29ec2f] border border- rounded-lg px-4 py-1 font-normal font-rubik`}
          >
            Pay
          </button>
        </Space>
      ),
    },
  ];

  // handlePayConfirm
  const handlePayConfirm = async (record) => {
    const { data } = await axiosSecure.post("/approve-pay-request", {paymentRequestId:record?._id});
    console.log(data);
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

export default PayRequestsTable;
