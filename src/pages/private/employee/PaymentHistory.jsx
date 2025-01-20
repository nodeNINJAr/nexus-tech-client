import PaymentHistoryTable from "../../../components/table/PaymentHistoryTable";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  //
  return (
    <div className="overflow-x-scroll overflow-y-hidden">
      <Helmet>
        <title>PayHistory || NexusTech</title>
      </Helmet>

      <PaymentHistoryTable />
    </div>
  );
};

export default PaymentHistory;
