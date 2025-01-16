import { message, Space, Table } from "antd";
import React from "react";
import Spinner from "../shared/loader/Spinner";
import PropTypes from "prop-types";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

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
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "Is Verified",
      key: "verified",
      render: (_, record) => (
        <Space size="middle" key={record.key}>
          <span className={`${record?.verified && "pointer-events-none"} cursor-pointer`} onClick={() => handleVerify(record?._id)}>
            {!record?.verified ? " ❌" : "✅"}
          </span>
        </Space>
      ),
    },
    {
      title: "Pay",
      key: "pay",
      render: (_, record) => (
        <Space size="middle" key={record.key}>
          <span className="bg-[#F6FFED] text-[#29ec2f] border border- rounded-lg px-4 py-1 font-normal font-rubik">Pay</span>
        </Space>
      ),
    },
    {
      title: "Employee Details",
      key: "employee-details",
      render: (_, record) => (
        <Space size="middle" key={record._id}>
           <Link to={`/details/${record?._id}`} className="bg-[#F0F5FF] border border-[#a4d1fb] rounded-lg px-4 py-1 font-normal font-rubik text-[#718bff] hover:text-[#59abf8]">Details</Link>
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
    </>
  );
};
EmployeeListTable.propTypes = {
  employee: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default EmployeeListTable;
