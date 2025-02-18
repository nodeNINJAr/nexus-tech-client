import React from 'react';
import { Card, Statistic, List, Select, } from 'antd';
import useUser from '../../hooks/useUser';


const EmployeeOverview = () => {
    const [,,,employeeCount] = useUser();


//   
  return (
    <Card title="Employee Overview By Designation" className='border-none'>
      <div className="flex">
        <div className="w-full">
          <List
            itemLayout="horizontal"
            dataSource={employeeCount}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">{item.designation.charAt(0)}</div>}
                  title={<span className='text-base sm:text-xl font-rubik dark:text-gray-300 text-gray-700'>{item.designation}</span>}
                  description={
                    <div>
                      <span className='text-gray-700 dark:text-gray-300 font-semibold text-xl'> {item.count} </span>
                      {/* <span className={`ml-2 ${item.change.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {item.change}
                      </span> */}
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </Card>
  );
};

export default EmployeeOverview;