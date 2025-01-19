import React from "react";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import PayRequestsTable from "../../../components/table/PayRequestsTable";
import { Helmet } from "react-helmet-async";

const Payroll = () => {
  //
  const axiosSecure = useAxiosSecure();
  //
  const {
    data: payRequests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["payment-requests"],
    queryFn: async () => {
      const { data } = await axiosSecure("/payment-requests");
      return data;
    },
  });

  //
  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>PayRoll || NexusTech</title>
      </Helmet>
      {/*  */}
      <PayRequestsTable
        payRequests={payRequests}
        isLoading={isLoading}
        refetch={refetch}
      />
    </div>
  );
};

export default Payroll;
