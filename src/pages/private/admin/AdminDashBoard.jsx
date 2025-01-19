import React from "react";
import AdminStatistic from "../../../components/Statistic/AdminStatistic";
import MessageList from "../../../components/Statistic/MessageList";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

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
      <AdminStatistic adminStats={adminStats} />
      {/* message list */}
      <div className="py-10 md:py-16">
        <MessageList />
      </div>
    </div>
  );
};

export default AdminDashBoard;
