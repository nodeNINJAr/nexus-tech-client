import React from "react";
import EmployeeListTable from "../../../components/table/EmployeeListTable";
import useUser from "../../../components/hooks/useUser";
import { Helmet } from "react-helmet-async";

const EmployeeList = () => {
  //
  const [Allemployee, isLoading, refetch] = useUser();

  //
  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>EmployeeList || NexusTech</title>
      </Helmet>
      <EmployeeListTable
        employee={Allemployee}
        isLoading={isLoading}
        refetch={refetch}
      />
    </div>
  );
};

export default EmployeeList;
