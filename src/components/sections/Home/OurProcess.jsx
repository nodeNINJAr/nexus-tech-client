import React from "react";
import { Steps, Timeline } from "antd";
import { SolutionOutlined, ProjectOutlined, CodeOutlined, BugOutlined, RocketOutlined } from "@ant-design/icons";

const { Step } = Steps;

const OurProcess = () => {
  return (
    <div className="w-full mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-poppins">Our Process</h2>

      {/* Horizontal Steps for Large Screens */}
      <div className="hidden md:flex justify-between font-roboto">
        <Steps current={5} size="large" className="font-roboto">
          <Step title="Consultation" description="Understanding your requirements" icon={<SolutionOutlined />} />
          <Step title="Planning" description="Creating a roadmap" icon={<ProjectOutlined />} />
          <Step title="Development" description="Building the product" icon={<CodeOutlined />} />
          <Step title="Testing" description="Ensuring quality and security" icon={<BugOutlined />} />
          <Step title="Deployment" description="Launching your product" icon={<RocketOutlined />} />
        </Steps>
      </div>

      {/* Vertical Timeline for Small Screens */}
      <div className="md:hidden mt-8 font-roboto">
        <Timeline mode="left">
          <Timeline.Item dot={<SolutionOutlined style={{ fontSize: "20px", color: "#1890ff" }} />}>
            <h3 className="text-lg font-semibold">Consultation</h3>
            <p>Understanding your requirements</p>
          </Timeline.Item>
          <Timeline.Item dot={<ProjectOutlined style={{ fontSize: "20px", color: "#52c41a" }} />}>
            <h3 className="text-lg font-semibold">Planning</h3>
            <p>Creating a roadmap</p>
          </Timeline.Item>
          <Timeline.Item dot={<CodeOutlined style={{ fontSize: "20px", color: "#faad14" }} />}>
            <h3 className="text-lg font-semibold">Development</h3>
            <p>Building the product</p>
          </Timeline.Item>
          <Timeline.Item dot={<BugOutlined style={{ fontSize: "20px", color: "#f5222d" }} />}>
            <h3 className="text-lg font-semibold">Testing</h3>
            <p>Ensuring quality and security</p>
          </Timeline.Item>
          <Timeline.Item dot={<RocketOutlined style={{ fontSize: "20px", color: "#722ed1" }} />}>
            <h3 className="text-lg font-semibold">Deployment</h3>
            <p>Launching your product</p>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
};

export default OurProcess;
