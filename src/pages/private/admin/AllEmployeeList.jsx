import React from 'react';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import AllEmpHrListTable from '../../../components/table/AllEmpHrListtable';

const AllEmployeeList = () => {
    const axiosSecure = useAxiosSecure();
    const {data:users =[] , isLoading, refetch} = useQuery({
         queryKey:['users'],
         queryFn:async()=>{
            const {data} = await axiosSecure(`/users`)
            return data;
         }
    })
    // employee fired by admin
    const handleFired = async(id)=>{
        await axiosSecure.patch(`/fired/${id}`);
        refetch();
    }
    // 
    return (
        <div className='overflow-x-scroll'>
            {/*  */}
            <AllEmpHrListTable users={users} isLoading={isLoading} handleFired={handleFired}/>
        </div>
    );
};

export default AllEmployeeList;