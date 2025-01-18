import React, { useState } from "react";
import EmployeeWorksTable from "../../../components/table/EmployeeWorksTable";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import WorkFilterForm from "../../../components/form/WorkFilterForm";

const EmployeeProgress = () => {
  const axiosSecure = useAxiosSecure();
  //
  const [filterData, setFilterData] = useState({
    monthName: "",
    employeeName: "",
  });

  //
  const {
    data:allEmployeeWorks=[],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["submited-work", filterData],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/submited-work?month=${filterData?.monthName}&name=${filterData?.employeeName}`
      );
      return data;
    },
  });



  const handleMonthChanges = async (value) => {
    setFilterData({ ...filterData, monthName: value });
  };
  const handleNameChanges = async (value) => {
    setFilterData({ ...filterData, employeeName: value });
  };
//   
  const handleFilterClear = () => {
    setFilterData({ ...filterData, monthName: "" ,employeeName:""});
    refetch()
  };



 //
  return (
    <>
      {/* employee work filter form */}
      <WorkFilterForm
        handleMonthChanges={handleMonthChanges}
        handleNameChanges={handleNameChanges}
        totalWorkedHour={allEmployeeWorks[0]?.totalWorkedHour}
        handleFilterClear={handleFilterClear}
        filterData={filterData}
      />
      {/* employees work table */}
      <div  className="overflow-x-auto">
        <EmployeeWorksTable
          allEmployeeWorks={allEmployeeWorks[0]?.filteredWork}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default EmployeeProgress;
