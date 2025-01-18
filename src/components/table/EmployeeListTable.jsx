import { message, Space, Table } from "antd";
import React, { useState } from "react";
import Spinner from "../shared/loader/Spinner";
import PropTypes from "prop-types";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import PayModal from "../modal/PayModal";

const EmployeeListTable = ({ employee, isLoading, refetch }) => {
  //
  const columns = [
    {
      title: "Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Email",
      dataIndex: "userEmail",
      key: "userEmail",
    },
    {
      title: "Bank Account",
      dataIndex: "bank_account_no",
      key: "bank_account_no",
    },
    {
      title: "Salary",
      key: "salary",
      render:(_,record)=>(
        <p>{record?.salary} $</p>
      )
    },
    {
      title: "Is Verified",
      key: "verified",
      render: (_, record) => (
        <Space size="middle" key={record.key}>
          <span
            className={`${
              record?.isVerified && "pointer-events-none"
            } cursor-pointer`}
            onClick={() => handleVerify(record?._id)}
          >
            {!record?.isVerified ? " ❌" : "✅"}
          </span>
        </Space>
      ),
    },
    {
      title: "Pay",
      key: "pay",
      render: (_, record) => (
        <Space size="middle" key={record.key}>
          <button
            onClick={() => handlePay(record)}
            disabled={!record?.isVerified}
            className={`${
              !record?.isVerified && "text-gray-300"
            } bg-[#F6FFED] text-[#29ec2f] border border- rounded-lg px-4 py-1 font-normal font-rubik`}
          >
            Pay
          </button>
        </Space>
      ),
    },
    {
      title: "Employee Details",
      key: "employee-details",
      render: (_, record) => (
        <Space size="middle" key={record._id}>
          <Link
            to={`/dashboard/details/${record?._id}`}
            className="bg-[#F0F5FF] border border-[#a4d1fb] rounded-lg px-4 py-1 font-normal font-rubik text-[#718bff] hover:text-[#59abf8]"
          >
            Details
          </Link>
        </Space>
      ),
    },
  ];

  // custom axios
  const axiosSecure = useAxiosSecure();
  // employee verify user
  const handleVerify = async (id) => {
    const { data } = await axiosSecure.patch(`/employee-verify/${id}`);
    if (data?.modifiedCount === 1) {
      refetch();
      message.success("Employee Verified");
    }
  };
  // pay modal show
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [payDetails, setPayDetails] = useState({});
  // const handle Pay
  const handlePay = async (record) => {
    setPayDetails(record);
    setIsModalVisible(true);
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
        dataSource={employee}
        rowKey="_id"
      />
      {/* employee pay modal */}
      <PayModal
        payDetails={payDetails}
        setPayDetails={setPayDetails}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};
EmployeeListTable.propTypes = {
  employee: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default EmployeeListTable;
