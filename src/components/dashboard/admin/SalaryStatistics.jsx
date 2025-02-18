import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Spinner } from 'flowbite-react';

// 
const SalaryStatistics = () => {
    const axiosSecure = useAxiosSecure();
    const {data:salarySummary=[], isLoading} = useQuery({
         queryKey:['salar-summary'],
         queryFn:async()=>{
             const {data} = await axiosSecure('/salary-request-summary');
             return data
         }
    })

if(isLoading) return <Spinner/>
    // 
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm my-8 w-full mx-auto overflow-x-auto">
      <h2 className="text-3xl text-gray-700 dark:text-gray-300 font-roboto font-medium mb-4 mt-2">Employee Salary Reports</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={salarySummary}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="receivedSalary" stroke="#8884d8" activeDot={{ r: 8 }} name="Received Salary" />
          <Line type="monotone" dataKey="notReceivedSalary" stroke="#ff7300" activeDot={{ r: 8 }} name="Not Received Salary" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalaryStatistics;