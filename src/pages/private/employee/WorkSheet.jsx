import React from "react";
import WorkSheetTable from "../../../components/table/WorkSheetTable";
import WorkSheetFrom from "../../../components/form/WorkSheetFrom";
import { Helmet } from "react-helmet-async";
import useWorkSheet from "../../../components/hooks/useWorkSheet";

const WorkSheet = () => {
  // 
 const [empWorkSheet,isLoading,refetch] = useWorkSheet();
  //
  return (
    <>
      <Helmet>
        <title>WorkSheet || NexusTech</title>
      </Helmet>
      <h1 className="text-lg font-poppins font-semibold pb-3 underline dark:text-white">
        Submit Your Daily Work
      </h1>
      {/*  */}
      <WorkSheetFrom refetch={refetch} isLoading={isLoading} />
      {/* from table */}
      <div className="overflow-x-auto">
        <WorkSheetTable
          empWorkSheet={empWorkSheet}
          refetch={refetch}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default WorkSheet;
