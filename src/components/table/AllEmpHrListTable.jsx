import React, { useState } from "react";
import PropTypes from "prop-types";
import Spinner from "../shared/loader/Spinner";
import { Space, Table } from "antd";
import ConfirmationModal from "../modal/ConfirmationModal";
import { CiCirclePlus } from "react-icons/ci";
import UpdateSalaryModal from "../modal/UpdateSalaryModal";

const AllEmpHrListTable = ({ users, isLoading, handleFired, handleMakeHr,refetch }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [salary, setSalary] = useState(null);

  //
  const showModal = (record) => {
    setSalary(record)
    setModalOpen(true);
  };

  //
  const columns = [
    {
      title: "Employee Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Salary",
      key: "salary",
      render: (_, record) => (
        <Space size="middle" key={record.key}>
          <p>{record?.salary} $</p>
          <button
            onClick={()=>showModal(record)}
            className={`cursor-pointer bg-[#F6FFED] text-[#ffce47] border border- rounded-full px-1 py-1 font-semibold font-rubik`}
          >
            <CiCirclePlus className="font-semibold font-rubik text-gray-600" />
          </button>
          <UpdateSalaryModal
          refetch={refetch}
            modalOpen={modalOpen}
            salary={salary}
            setModalOpen={setModalOpen}
          />
        </Space>
      ),
    },
    {
      title: "Make Employee ---> HR",
      key: "hr",
      render: (_, record) => (
        <Space size="middle" key={record.key}>
          <button
            disabled={record?.userRole === "hr"}
            onClick={() => handleMakeHr(record?._id)}
            className={`bg-[#F6FFED] text-[#29ec2f] border border- rounded-lg px-4 py-1 font-normal font-rubik`}
          >
            {record?.userRole === "hr" ? "HR" : "Make HR"}
          </button>
        </Space>
      ),
    },
    {
      title: "Fire An Employee",
      key: "fire",
      render: (_, record) => (
        <Space size="middle" key={record._id}>
          <ConfirmationModal
            title={"Termination Confirmation"}
            content={
              "Are you sure you want to terminate this employees account? This action cannot be undone."
            }
            okText={"Confirm Termination"}
            handleAction={handleFired}
            text={record?.fired ? "Fired" : "Fire"}
            record={record}
          />
        </Space>
      ),
    },
  ];

  //
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
  handleFired: PropTypes.func,
  handleMakeHr: PropTypes.func,
  refetch: PropTypes.func,
};

export default AllEmpHrListTable;
