import React from "react";
import { Space, Table, Tag } from "antd";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const columns = [
  {
    title: "Tasks",
    dataIndex: "taskName",
    key: "name",
   
  },
  {
    title: "Hours Worked",
    dataIndex: "workedHour",
    key: "age",
  },
  {
    title: "Date",
    dataIndex: "workedDate",
    key: "address",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>Update</a>
      </Space>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];


// work sheet table
const WorkSheetTable = () => {
// custom axios
const axiosSecure = useAxiosSecure();
const {user} = useAuth();
// get data by tanstack query
const {data:empWorkSheet = [] } = useQuery({
  queryKey:["empWorkSheet", user?.email],
  enabled:!!user?.email,
  queryFn:async()=>{
     const {data} = await axiosSecure(`/worksheet/${user?.email}`);
     return data
  }
})




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
      />
    </>
  );
};
export default WorkSheetTable;
