import React from "react";
import AdminStatistic from "../../../components/Statistic/AdminStatistic";
import MessageList from "../../../components/Statistic/MessageList";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import Greeting from "../../../components/dashboard/Greeting";
import EmployeeOverview from "../../../components/dashboard/admin/EmployeeOverview";
import SalaryStatistics from "../../../components/dashboard/admin/SalaryStatistics";

const AdminDashBoard = () => {
  const axiosSecure = useAxiosSecure();
  const { data: adminStats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const { data } = await axiosSecure("/admin-stats");
      return data;
    },
  });

  //
  return (
    <div>
      <Helmet>
        <title>AdminDashboard || NexusTech</title>
      </Helmet>
      {/*  */}
      <Greeting />
      {/* admin stats */}
      <AdminStatistic adminStats={adminStats} />
      {/* salary reports */}
      <SalaryStatistics />
      {/* message list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2 bg-white dark:bg-slate-800 rounded-lg px-4 py-2">
          <h2 className=" text-3xl text-gray-700 dark:text-gray-300 font-roboto font-medium mb-4 mt-2">
            All Message From Random User
          </h2>
          <MessageList />
        </div>
        <div className="col-span-1">
          <EmployeeOverview />
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
