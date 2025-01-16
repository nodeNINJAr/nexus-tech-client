import React from 'react';
import EmployeeListTable from '../../../components/table/EmployeeListTable';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';

const EmployeeList = () => {
//    
const axiosSecure = useAxiosSecure();
// 
  const {data:employee =[], isLoading, refetch} = useQuery({
    queryKey:["employee-list"],
    queryFn:async()=>{
        const {data} = await axiosSecure("/employee-list")
        return data;
    }
  })



    

    // 
    return (
        <div className='overflow-x-scroll'>
           <EmployeeListTable employee={employee} isLoading={isLoading} refetch={refetch}/>
        </div>
    );
};

export default EmployeeList;