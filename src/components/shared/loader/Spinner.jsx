import React from "react";
import {Flex, Spin} from "antd"
const Spinner = () => {
  return (
    <div className="flex justify-center min-h-dvh">
      <Flex align="center" gap="middle">
        <Spin size="large" />
      </Flex>
    </div>
  );
};

export default Spinner;
