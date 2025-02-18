import React from "react";
import PropTypes from 'prop-types';
import { Statistic, Card } from "antd";
import CountUp from "react-countup";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

//
const formatter = (value) => <CountUp end={value} separator="," />;
//
const AdminStatistic = ({adminStats}) => {


  // 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 truncate">
        <Card bordered={false} className="shadow-md">
          <Statistic
            title={<p className="text-gray-800 dark:text-gray-400 font-exo2 font-medium text-xl">Total Employee</p>}
            value={adminStats?.totalUsers}
            valueStyle={{
              color: "#3f8600",
              fontFamily:'font-exo2',
            }}
            formatter={formatter}
            
          />
        </Card>

        <Card bordered={false}>
          <Statistic
            className="truncate"
            title={<p className="text-gray-800 dark:text-gray-400 font-exo2 font-medium text-xl">Total Earning</p>}
            value={2112893}
            valueStyle={{
              color: "#3f8600",
              fontFamily:'font-exo2',
            }}
            precision={2}
            formatter={formatter}
            prefix={<ArrowDownOutlined />}
             suffix="$"
          />
        </Card>

        <Card bordered={false}>
          <Statistic
            title={<p className="text-gray-800 dark:text-gray-400 font-exo2 font-medium text-xl">Total Expenses</p>}
            value={adminStats?.totalExpenses}
            precision={2}
            valueStyle={{
              color: "#cf1322",
              fontFamily:'font-exo2',
            }}
            formatter={formatter}
            prefix={<ArrowUpOutlined />}
             suffix="$"

          />
        </Card>

        <Card bordered={false}>
          <Statistic
            title={<p className="text-gray-800 dark:text-gray-400 font-exo2 font-medium text-xl">Total Worked Hour</p>}
            value={adminStats?.totalWorkedHours}
            precision={2}
            valueStyle={{
              color: "#cf1322",
              fontFamily:'font-exo2',
            }}
            formatter={formatter}
            suffix="h"
          />
        </Card>
    
    </div>
  );
};
AdminStatistic.propTypes = {
  adminStats: PropTypes.shape({
    totalUsers: PropTypes.number,
    totalExpenses: PropTypes.number,
    totalWorkedHours: PropTypes.number,
  }),
};

export default AdminStatistic;

