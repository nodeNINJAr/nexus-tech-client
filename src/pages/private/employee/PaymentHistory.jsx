import React from "react";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import PaymentHistoryTable from "../../../components/table/PaymentHistoryTable";
import useAuth from "../../../components/hooks/useAuth";

const PaymentHistory = () => {
  //
  const { user } = useAuth();
  //
  const axiosSecure = useAxiosSecure();
  //
  const { data: payHistory = [] } = useQuery({
    queryKey: ["payment-history", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/payment-history/${user?.email}`);
      return data;
    },
  });

  return (
    <div className="overflow-x-auto">
      {/*  */}
      <PaymentHistoryTable payHistory={payHistory} />
    </div>
  );
};

export default PaymentHistory;
