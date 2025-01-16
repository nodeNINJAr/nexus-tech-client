import React from 'react';
import EmployeeWorksTable from '../../../components/table/EmployeeWorksTable';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';

const EmployeeProgress = () => {
     const axiosSecure = useAxiosSecure();

    // 
    const {data:allEmployeeWorks = [], isLoading , refetch } =  useQuery({
         queryKey:["submited-work"],
         queryFn:async()=>{
            const {data} = await axiosSecure.get(`/submited-work`)
            return data
         }
    })

    return (
        <div>
           {/*  */}
           <EmployeeWorksTable allEmployeeWorks={allEmployeeWorks} isLoading={isLoading} refetch={refetch}/>
        </div>
    );
};

export default EmployeeProgress;