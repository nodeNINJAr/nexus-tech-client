import React from 'react'
import Greeting from '../../../components/dashboard/Greeting'
import EmployeesOverview from '../../../components/dashboard/hr/EmployeesOverview'
import TotalDepartment from '../../../components/dashboard/hr/TotalDepartment'
import useUser from '../../../components/hooks/useUser'

const HrDashboard = () => {
 const [, isLoading, ,employeeCount] = useUser();

  // 
  return (
    <div>
        <Greeting/>
         <div className='flex justify-between items-start flex-wrap md:flex-nowrap gap-6'>
            <EmployeesOverview employeeCount={employeeCount}/>
            {/*  */}
            <TotalDepartment employeeCount={employeeCount}/>
         </div>
    </div>
  )
}

export default HrDashboard