import React from 'react';
import {useQuery} from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';


// 
const useRole = () => {
    // AXIOS secure
    const axiosPublic = useAxiosSecure();
    const {user} = useAuth();
    // 
   const {data:userRole="", isLoading, refetch} = useQuery({
     queryKey:['userRole',user?.email],
     enabled:!!user?.email,
     queryFn:async()=>{
        const {data} = await axiosPublic(`/user/role/${user?.email}`);
        return data
     }
   })
    return [userRole, isLoading, refetch]
};

export default useRole;