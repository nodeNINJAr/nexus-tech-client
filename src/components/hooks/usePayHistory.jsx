import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const usePayHistory = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    //
    const { data:payHistory =[], isLoading, isError } = useQuery({
        queryKey: ['paymentHistory'],  // Pass the queryKey as an object
        queryFn: async() => {
          const {data} = await axiosSecure(`/payment-history/${user?.email}`);
          return data.payments; 
        } 
      });

  return[payHistory, isLoading, isError]
}

export default usePayHistory