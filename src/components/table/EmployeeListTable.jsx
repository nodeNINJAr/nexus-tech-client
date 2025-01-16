import { message, Space, Table } from "antd";
import React from "react";
import Spinner from "../shared/loader/Spinner";
import PropTypes from "prop-types";
import useAxiosSecure from "../hooks/useAxiosSecure";

const EmployeeListTable = ({ employee, isLoading, refetch }) => {
  console.log(employee);
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
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" key={record.key}>
          <span>Pay</span>
        </Space>
      ),
    },
    {
      title: "Action",
      key: "deleteAction",
      render: (_, record) => (
        <Space size="middle" key={record._id}>
          <span>Details</span>
        </Space>
      ),
    },
  ];

  // custom axios
  const axiosSecure = useAxiosSecure();

  // employee verify user
  const handleVerify = async (id) => {
    const { data } = await axiosSecure.patch(`/employee-verify/${id}`);
    console.log(data);
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
        className="whitespace-nowrap "
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
