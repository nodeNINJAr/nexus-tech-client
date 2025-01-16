import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const axiosSecure = useAxiosSecure();
  //
  const {
    data: Allemployee = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["employee-list"],
    queryFn: async () => {
      const { data } = await axiosSecure("/employee-list");
      return data;
    },
  });

  return [Allemployee, isLoading, refetch];
};

export default useUser;
