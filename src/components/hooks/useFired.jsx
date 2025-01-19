import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useFired = () => {
    const axiosPublic = useAxiosPublic();
    //  
    const { data } = useQuery({
        queryKey:[""],
        queryFn:async()=>{
            
        }
    })
    return [data?.fired]
};

export default useFired;