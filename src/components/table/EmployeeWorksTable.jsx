import {Table } from "antd";
import React from "react";
import PropTypes from "prop-types";
import Spinner from "../shared/loader/Spinner";

const EmployeeWorksTable = ({allEmployeeWorks, isLoading}) => {
  //
  const columns = [
    {
      title: "Employee Name",
      dataIndex: "employeeName",
      key: "employeeName",
    },
    {
      title: "Task Name",
      dataIndex: "taskName",
      key: "taskName",
    },
    {
      title: "Worked Hour",
      dataIndex: "workedHour",
      key: "workedHour",
    },
    {
      title: "Worked Date",
      dataIndex: "workedDate",
      key: "workedDate",
    },
  
  ];

  //
  if (isLoading) return <Spinner />;
  //
  return (
    <>
      <Table
        className="whitespace-nowrap capitalize text-red-200"
        columns={columns}
        pagination={{
          position: ["bottomRight"],
        }}
        dataSource={allEmployeeWorks}
        rowKey="_id"
      />
    </>
  );
};
EmployeeWorksTable.propTypes = {
  allEmployeeWorks: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
};

export default EmployeeWorksTable;

