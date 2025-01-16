import React from 'react';
import EmployeeListTable from '../../../components/table/EmployeeListTable';
import useUser from '../../../components/hooks/useUser';

const EmployeeList = () => {
// 
const [Allemployee,isLoading,refetch] = useUser();

    // 
    return (
        <div className='overflow-x-scroll'>
           <EmployeeListTable employee={Allemployee} isLoading={isLoading} refetch={refetch}/>
        </div>
    );
};

export default EmployeeList;