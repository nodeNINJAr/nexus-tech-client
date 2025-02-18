import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

//

const TotalDepartment = ({ employeeCount = [] }) => {
  //
  const data = employeeCount?.map((item) => ({
    name: item?.designation,
    value: item?.count,
  }));
  //
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
    "#FF1919",
  ];
  //
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold font-exo2 dark:text-white mb-6 ml-4">
        Total Department
      </h2>
      <div className="overflow-x-auto">
        <PieChart width={500} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
          >
            {data.map((entry, idx) => (
              <Cell
                key={`cell-${entry.name}`}
                fill={COLORS[idx % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default TotalDepartment;
