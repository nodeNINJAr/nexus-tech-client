import React from "react";
import PropTypes from 'prop-types';
import Spinner from "../shared/loader/Spinner";
import { Space, Table } from "antd";

const AllEmpHrListTable = ({users, isLoading ,handleFired,handleMakeHr}) => {

  //
  const columns = [
    {
      title: "Employee Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Designation",
      dataIndex: "userRole",
      key: "userRole",
    },
    {
        title: "Make Employee ---> HR",
        key: "hr",
        render: (_, record) => (
          <Space size="middle" key={record.key}>
              <button onClick={()=>handleMakeHr(record?._id)} className="cursor-pointer bg-[#F6FFED] text-[#29ec2f] border border- rounded-lg px-4 py-1 font-normal font-rubik">Make HR</button>
          </Space>
        ),
      },
      {
        title: "Fire An Employee",
        key: "fire",
        render: (_, record) => (
          <Space size="middle" key={record._id}>
              <button onClick={()=>handleFired(record?._id)} className={`${record?.fired && "pointer-events-none bg-[#f8c69f] text-[#ff9341]"} cursor-pointer bg-[#FFF2E8] border border-[#ffb77f] rounded-lg px-4 py-1 font-normal font-rubik text-[#ffb77f] hover:text-[#ffac6d]`}>{record?.fired?"Fired":"Fire"}</button>
          </Space>
        ),
      },
  ];
  if (isLoading) return <Spinner />;
  return (
    <>
      <Table
        className="whitespace-nowrap capitalize text-red-200"
        columns={columns}
        pagination={{
          position: ["bottomRight"],
        }}
        dataSource={users}
        rowKey="_id"
      />
    </>
  );
};
AllEmpHrListTable.propTypes = {
  users: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleFired: PropTypes.func.isRequired,
  handleMakeHr:PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default AllEmpHrListTable;

