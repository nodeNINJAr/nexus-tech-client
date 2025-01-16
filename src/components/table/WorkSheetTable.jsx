import React from "react";
import PropTypes from "prop-types";
import { message, Space, Table } from "antd";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Spinner from "../shared/loader/Spinner";
import DeleteModal from "../modal/DeleteModal";
import UpdateModal from "../modal/UpdateModal";

// work sheet table
const WorkSheetTable = ({empWorkSheet, refetch,  isLoading}) => {
  //
  const columns = [
    {
      title: "Tasks",
      dataIndex: "taskName",
      key: "taskName",
    },
    {
      title: "Hours Worked",
      dataIndex: "workedHour",
      key: "taskName",
    },
    {
      title: "Date",
      dataIndex: "workedDate",
      key: "taskName",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" key={record.key}>
          <UpdateModal record={record} refetch={refetch}  />
        </Space>
      ),
    },
    {
      title: "Action",
      key: "deleteAction",
      render: (_, record) => (
        <Space size="middle" key={record._id}>
          <DeleteModal handleDelete={handleDelete} record={record} text={'Delete'}/>
        </Space>
      ),
    },
  ];



  // custom axios
  const axiosSecure = useAxiosSecure();

  // handle delete
  const handleDelete = async (record) => {
    const { data } = await axiosSecure.delete(`/worksheet/${record?._id}`);
    if (data?.deletedCount === 1) {
      refetch();
      message.warning("Record deleted from database");
    }
  };
  // 
  if(isLoading) return <Spinner/>
  //
  return (
    <>
      <Table
        className="whitespace-nowrap capitalize"
        columns={columns}
        pagination={{
          position: ["bottomRight"],
        }}
        dataSource={empWorkSheet}
        rowKey="_id"
      />
    </>
  );
};

WorkSheetTable.propTypes = {
  empWorkSheet: PropTypes.array.isRequired,
  refetch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default WorkSheetTable;

