import React from "react";
import AdminStatistic from "../../../components/Statistic/AdminStatistic";
import MessageList from "../../../components/Statistic/MessageList";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";

const AdminDashBoard = () => {
 const axiosSecure = useAxiosSecure();
 const {data:adminStats={}} = useQuery({
    queryKey:['admin-stats'],
    queryFn:async()=>{
        const {data} = await axiosSecure("/admin-stats");
        return data
    }
 })


//  
  return (
    <div>
      <AdminStatistic adminStats={adminStats} />
      {/* message list */}
      <div className="py-10 md:py-16">
        <MessageList />
      </div>
    </div>
  );
};

export default AdminDashBoard;
