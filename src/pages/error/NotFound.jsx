import React from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Result
        status="404"
        title={<p className="text-3xl sm:text-5xl font-orbitron">404</p>}
        subTitle={<p className="text-base sm:text-xl font-rubik">Sorry, the page you visited does not exist.</p>}
        extra={
          <Button type="primary" onClick={handleBackHome} className="text-lg font-rubik">
            Back To Home
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
