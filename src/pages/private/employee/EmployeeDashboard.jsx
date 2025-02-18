import React from "react";
import Greeting from "../../../components/dashboard/Greeting";
import Chart from "../../../components/shared/chart/Chart";
import usePayHistory from "../../../components/hooks/usePayHistory";
import WorkingHistory from "../../../components/dashboard/employee/WorkingHistory";
import Spinner from "../../../components/shared/loader/Spinner";

const EmployeeDashboard = () => {
  const [payHistory, isLoading] = usePayHistory();

  //
  return (
    <div>
      <Greeting />
      {/*  */}
      <div>
        {/* pay graph and */}
        <div className="overflow-x-auto">
          <div>
            <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
              Recent Pay History
            </h2>
          </div>
          <Chart payHistory={payHistory.slice(0,5)} />
        </div>
        <div></div>
      </div>
      {/* workSheet history  */}
      {isLoading ? <Spinner /> : <WorkingHistory />}
    </div>
  );
};

export default EmployeeDashboard;
