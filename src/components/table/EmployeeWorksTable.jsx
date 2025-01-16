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

//   // custom axios
//   const axiosSecure = useAxiosSecure();

//   // employee verify user
//   const handleVerify = async (id) => {
//     const { data } = await axiosSecure.patch(`/employee-verify/${id}`);
//     if (data?.modifiedCount === 1) {
//       refetch();
//       message.success("Employee Verified");
//     }
//   };

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
  allEmployeeWorks: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default EmployeeWorksTable;

