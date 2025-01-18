import React from "react";
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  LabelList,
  Cell,
} from "recharts";
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink']
const Chart = ({ payHistory }) => {
  const updatedPayHistory = payHistory.map((item) => ({
    ...item,
    monthYear: `${item.month} ${item.year}`, // Combine month and year
  }));

  //
  return (
    <BarChart className="overflow-x-auto" width={600} height={400} data={updatedPayHistory}>
      {" "}
      <XAxis dataKey="monthYear" stroke="#8884d8" />
      <YAxis
        style={{fontWeight:"500" }}
        tickFormatter={(value) => `${value}$`}
        ticks={[0, 50, 150, 250, 350, 450, 550]}
      />
      <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc", fontWeight:"500" }} />
      <Legend
        width={100}
        wrapperStyle={{
          top: 40,
          right: 20,
          backgroundColor: "#f5f5f5",
          border: "1px solid #d5d5d5",
          borderRadius: 3,
          lineHeight: "40px",
          fontWeight:"500"
        }}
      />{" "}
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />{" "}
      <Bar dataKey="salary" barSize={40} fill="#8884d8">
        {updatedPayHistory.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
        <LabelList style={{fontWeight:"500" }} dataKey="salary" position="top" />
      </Bar>
    </BarChart>
  );
};
Chart.propTypes = {
  payHistory: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      salary: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Chart;
