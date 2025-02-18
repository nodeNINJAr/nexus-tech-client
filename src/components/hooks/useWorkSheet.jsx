import React from 'react'
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useWorkSheet = () => {

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

  return [empWorkSheet,isLoading,refetch]
}

export default useWorkSheet