import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

//

const EmployeesOverview = ({ employeeCount }) => {
  //
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold font-exo2 dark:text-white mb-6 ml-4">
        Employees Overview
      </h2>
      <div className="overflow-x-auto">
        <BarChart
          width={500}
          height={300}
          data={employeeCount}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="designation" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default EmployeesOverview;
