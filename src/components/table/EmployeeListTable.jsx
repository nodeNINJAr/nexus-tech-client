import { Space, Table } from "antd";
import React from "react";
import Spinner from "../shared/loader/Spinner";
import PropTypes from "prop-types";

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
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" key={record.key}>
          <span>❌</span>
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

  //   // custom axios
  //   const axiosSecure = useAxiosSecure();

  //   // handle delete
  //   const handleDelete = async (record) => {
  //     const { data } = await axiosSecure.delete(`/worksheet/${record?._id}`);
  //     if (data?.deletedCount === 1) {
  //       refetch();
  //       message.warning("Record deleted from database");
  //     }
  //   };
  //
  if (isLoading) return <Spinner />;
  //
  return (
    <>
      <Table
        className="whitespace-nowrap capitalize"
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
