import React, { useState } from "react";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import AllEmpHrListTable from "../../../components/table/AllEmpHrListtable";
import { Segmented } from "antd";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import AllEmployeeGrid from "../../../components/gridview/AllEmployeeGrid";
import { Helmet } from "react-helmet-async";

const AllEmployeeList = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users`);
      return data;
    },
  });

  //  general employee to make hr by admin
  const handleMakeHr = async (id) => {
    await axiosSecure.patch(`/make-hr/${id}`);
    refetch();
  };
  // employee fired by admin
  const handleFired = async (record) => {
    await axiosSecure.patch(`/fired/${record?._id}`);
    refetch();
  };

  const [selectedView, setSelectedView] = useState("List");

  //
  return (
    <>
      <Helmet>
        <title>AllEmployee || NexusTech</title>
      </Helmet>
      <div className="fixed top-6 right-4 z-50">
        <Segmented
          options={[
            {
              value: "List",
              icon: <BarsOutlined />,
            },
            {
              value: "Grid",
              icon: <AppstoreOutlined />,
            },
          ]}
          value={selectedView} // Bind the selected value to state
          onChange={setSelectedView} // Update state on selection change
        />
      </div>

      <div className="overflow-x-auto">
        {selectedView === "List" && (
          <AllEmpHrListTable
            refetch={refetch}
            users={users}
            isLoading={isLoading}
            handleMakeHr={handleMakeHr}
            handleFired={handleFired}
          />
        )}
      </div>
      {/* grid view */}
      {selectedView === "Grid" && (
        <>
          <AllEmployeeGrid refetch={refetch} users={users} />
        </>
      )}
    </>
  );
};

export default AllEmployeeList;
