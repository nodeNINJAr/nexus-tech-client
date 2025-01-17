import React from "react";
import PropTypes from "prop-types";
import { message, Space, Table } from "antd";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Spinner from "../shared/loader/Spinner";
import ConfirmationModal from "../modal/ConfirmationModal";
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
      title: "Update Work",
      key: "update",
      render: (_, record) => (
        <Space size="middle" key={record.key}>
          <UpdateModal record={record} refetch={refetch}  />
        </Space>
      ),
    },
    {
      title: "Delete Work",
      key: "deleteWork",
      render: (_, record) => (
        <Space size="middle" key={record._id}>
          <ConfirmationModal okText={"Delete It"} title={'Confirm Deletion'} content={'Are you sure you want to delete this item? This action cannot be undone'} handleAction={handleDelete} record={record._id} text={'Delete'}/>
        </Space>
      ),
    },
  ];



  // custom axios
  const axiosSecure = useAxiosSecure();

  // handle delete
  const handleDelete = async (id) => {
    const { data } = await axiosSecure.delete(`/worksheet/${id}`);
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

