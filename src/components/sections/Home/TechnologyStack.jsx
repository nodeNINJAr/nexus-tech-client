import React from "react";
import { Card, Row, Col } from "antd";
import { FaReact, FaNodeJs, FaDatabase, FaAws, FaDocker } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiNextdotjs, SiTypescript, SiGraphql } from "react-icons/si";

const techStack = [
  {
    name: "React.js",
    icon: <FaReact size={40} className="text-[#61DBFB] dark:text-[#87CEEB]" />,
    description: "Frontend framework for building UI.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={40} className="text-black dark:text-white" />,
    description: "React-based framework for SEO-friendly apps.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={40} className="text-[#339933] dark:text-[#98FB98]" />,
    description: "Backend runtime for JavaScript applications.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={40} className="text-[#47A248] dark:text-[#ADFF2F]" />,
    description: "NoSQL database for scalable applications.",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={40} className="text-[#336791] dark:text-[#ADD8E6]" />,
    description: "Relational database for structured data.",
  },
  {
    name: "AWS",
    icon: <FaAws size={40} className="text-[#FF9900] dark:text-[#FFD700]" />,
    description: "Cloud computing services for scalability.",
  },
  {
    name: "Docker",
    icon: <FaDocker size={40} className="text-[#2496ED] dark:text-[#87CEFA]" />,
    description: "Containerization for easy deployment.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={40} className="text-[#007ACC] dark:text-[#B0C4DE]" />,
    description: "Typed JavaScript for better scalability.",
  },
  {
    name: "GraphQL",
    icon: <SiGraphql size={40} className="text-[#E10098] dark:text-[#FF69B4]" />,
    description: "Query language for APIs.",
  },
];

const TechnologyStack = () => {
  return (
    <div className="w-full mx-auto px-4 font-roboto dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white font-poppins">
        Technology Stack
      </h2>
      <Row gutter={[16, 16]} justify="center">
        {techStack.map((tech, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              className="text-center p-4 h-full dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex justify-center mb-3">{tech.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {tech.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{tech.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TechnologyStack;