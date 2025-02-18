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
          <Chart payHistory={payHistory} />
        </div>
        <div></div>
      </div>
      {/* workSheet history  */}
       {isLoading?<Spinner/> : <WorkingHistory/>}
    </div>
  );
};

export default EmployeeDashboard;
