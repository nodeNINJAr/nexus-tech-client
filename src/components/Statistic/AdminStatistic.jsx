import React from "react";
import PropTypes from 'prop-types';
import { Statistic, Card } from "antd";
import CountUp from "react-countup";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

//
const formatter = (value) => <CountUp end={value} separator="," />;
//
const AdminStatistic = ({adminStats}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 truncate">
        <Card bordered={false}>
          <Statistic
            title="Total Employee"
            value={adminStats?.totalUsers}
            formatter={formatter}
            
          />
        </Card>

        <Card bordered={false}>
          <Statistic
            className="truncate"
            title="Total Earning"
            value={2112893}
            valueStyle={{
              color: "#3f8600",
            }}
            precision={2}
            formatter={formatter}
            prefix={<ArrowDownOutlined />}
             suffix="$"
          />
        </Card>

        <Card bordered={false}>
          <Statistic
            title="Total Expenses"
            value={adminStats?.totalExpenses}
            precision={2}
            valueStyle={{
              color: "#cf1322",
            }}
            formatter={formatter}
            prefix={<ArrowUpOutlined />}
             suffix="$"

          />
        </Card>

        <Card bordered={false}>
          <Statistic
            title="Total Worked Hour"
            value={adminStats?.totalWorkedHours}
            precision={2}
            valueStyle={{
              color: "#cf1322",
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

