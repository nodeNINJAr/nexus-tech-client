import React from "react";
import WorkSheetTable from "../../../components/table/WorkSheetTable";
import WorkSheetFrom from "../../../components/form/WorkSheetFrom";
import useAuth from "../../../components/hooks/useAuth";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const WorkSheet = () => {
  // custom axios
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  // get data by tanstack query
  const {
    data: empWorkSheet = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["empWorkSheet", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/worksheet/${user?.email}`);
      return data;
    },
  });

  //
  return (
    <div className="overflow-x-scroll">
      <h1 className="text-lg font-poppins font-semibold pb-3 underline">
        Submit Your Daily Work
      </h1>
      {/*  */}
      <WorkSheetFrom  refetch={refetch}  isLoading={isLoading} />
      {/* from table */}
      <WorkSheetTable empWorkSheet={empWorkSheet}  refetch={refetch}  isLoading={isLoading} />
    </div>
  );
};

export default WorkSheet;
