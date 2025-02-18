import React from "react";
import { Steps, Timeline } from "antd";
import { SolutionOutlined, ProjectOutlined, CodeOutlined, BugOutlined, RocketOutlined } from "@ant-design/icons";
const {Step} = Steps;

const OurProcess = () => {
  const timelineItems = [
    {
      dot: (
        <SolutionOutlined
          style={{ fontSize: "20px", color: "#1890ff" }}
          className="dark:text-blue-400"
        />
      ),
      children: (
        <>
          <h3 className="text-lg font-semibold dark:text-white">Consultation</h3>
          <p className="dark:text-gray-400">Understanding your requirements</p>
        </>
      ),
    },
    {
      dot: (
        <ProjectOutlined
          style={{ fontSize: "20px", color: "#52c41a" }}
          className="dark:text-green-400"
        />
      ),
      children: (
        <>
          <h3 className="text-lg font-semibold dark:text-white">Planning</h3>
          <p className="dark:text-gray-400">Creating a roadmap</p>
        </>
      ),
    },
    {
      dot: (
        <CodeOutlined
          style={{ fontSize: "20px", color: "#faad14" }}
          className="dark:text-yellow-400"
        />
      ),
      children: (
        <>
          <h3 className="text-lg font-semibold dark:text-white">Development</h3>
          <p className="dark:text-gray-400">Building the product</p>
        </>
      ),
    },
    {
      dot: (
        <BugOutlined
          style={{ fontSize: "20px", color: "#f5222d" }}
          className="dark:text-red-400"
        />
      ),
      children: (
        <>
          <h3 className="text-lg font-semibold dark:text-white">Testing</h3>
          <p className="dark:text-gray-400">Ensuring quality and security</p>
        </>
      ),
    },
    {
      dot: (
        <RocketOutlined
          style={{ fontSize: "20px", color: "#722ed1",background:"#000" }}
          className="dark:text-purple-400"
        />
      ),
      children: (
        <>
          <h3 className="text-lg font-semibold dark:text-white">Deployment</h3>
          <p className="dark:text-gray-400">Launching your product</p>
        </>
      ),
    },
  ];

  return (
    <div className="w-full mx-auto py-16 px-4 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white font-poppins">
        Our Process
      </h2>

      {/* Horizontal Steps for Large Screens */}
      <div className="hidden md:flex justify-between font-roboto">
        <Steps
          current={5}
          size="large"
          className="font-roboto font-medium"
        >
          <Step
            title="Consultation"
            description="Understanding your requirements"
            icon={<SolutionOutlined className="dark:text-blue-400" />}
          />
          <Step
            title="Planning"
            description="Creating a roadmap"
            icon={<ProjectOutlined className="dark:text-green-400" />}
          />
          <Step
            title="Development"
            description="Building the product"
            icon={<CodeOutlined className="dark:text-yellow-400" />}
          />
          <Step
            title="Testing"
            description="Ensuring quality and security"
            icon={<BugOutlined className="dark:text-red-400" />}
          />
          <Step
            title="Deployment"
            description="Launching your product"
            icon={<RocketOutlined className="dark:text-purple-400" />}
          />
        </Steps>
      </div>

      {/* Vertical Timeline for Small Screens */}
      <div className="md:hidden mt-8 font-roboto">
        <Timeline
          mode="left"
          items={timelineItems}
          className="dark:[&_.ant-timeline-item-content]:text-gray-300 dark:[&_.ant-timeline-item-tail]:border-gray-700"
        />
      </div>
    </div>
  );
};

export default OurProcess;