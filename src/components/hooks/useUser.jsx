import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const axiosSecure = useAxiosSecure();
  //
  const {
    data,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["employee-list"],
    queryFn: async () => {
      const { data } = await axiosSecure("/employee-list");
      return data;
    },
  });
  const Allemployee = data?.totalEmployee;
   const employeeCount = data?.employeeCount;

  return [Allemployee, isLoading, refetch, employeeCount];
};

export default useUser;
