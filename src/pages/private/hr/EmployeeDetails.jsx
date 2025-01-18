import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import UserInfoCard from '../../../components/shared/card/UserInfoCard';
import Chart from '../../../components/shared/chart/Chart';
import useUser from '../../../components/hooks/useUser';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';

const EmployeeDetails = () => {
    // 
    const axiosSecure = useAxiosSecure();
    const {employeeId} = useParams();
    // 
    const [Allemployee , isLoading, refetch] = useUser();
    // 
    const {data:payHistory = []} = useQuery({
        queryKey:["payment-history" ,employeeId],
        queryFn: async()=>{
            const {data} = await axiosSecure(`/payment-history/${employeeId}`);
            return data
        }
    })
    //   
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-6'>
            {/*  */}
           <div className='col-span-1 md:col-span-1'>
               <UserInfoCard/>
           </div>
           {/*  */}
            <div className='col-span-1 md:col-span-2 overflow-x-auto'>
                 <Chart payHistory={payHistory}/>
            </div>
        </div>
    );
};

export default EmployeeDetails;