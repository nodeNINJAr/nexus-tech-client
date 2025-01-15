import React from "react";
import {Flex, Spin} from "antd"
const Spinner = () => {
  return (
    <div>
      <Flex align="center" gap="middle">
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </Flex>
    </div>
  );
};

export default Spinner;
