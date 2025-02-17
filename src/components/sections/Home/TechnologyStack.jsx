import React from "react";
import { Card, Row, Col } from "antd";
import { FaReact, FaNodeJs, FaDatabase, FaAws, FaDocker } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiNextdotjs, SiTypescript, SiGraphql } from "react-icons/si";

const techStack = [
  { name: "React.js", icon: <FaReact size={40} color="#61DBFB" />, description: "Frontend framework for building UI." },
  { name: "Next.js", icon: <SiNextdotjs size={40} color="black" />, description: "React-based framework for SEO-friendly apps." },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#339933" />, description: "Backend runtime for JavaScript applications." },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" />, description: "NoSQL database for scalable applications." },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} color="#336791" />, description: "Relational database for structured data." },
  { name: "AWS", icon: <FaAws size={40} color="#FF9900" />, description: "Cloud computing services for scalability." },
  { name: "Docker", icon: <FaDocker size={40} color="#2496ED" />, description: "Containerization for easy deployment." },
  { name: "TypeScript", icon: <SiTypescript size={40} color="#007ACC" />, description: "Typed JavaScript for better scalability." },
  { name: "GraphQL", icon: <SiGraphql size={40} color="#E10098" />, description: "Query language for APIs." },
];

const TechnologyStack = () => {
  return (
    <div className="w-full mx-auto px-4 font-roboto">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-poppins">Technology Stack</h2>

      <Row gutter={[16, 16]} justify="center">
        {techStack.map((tech, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card hoverable className="text-center p-4 h-full">
              <div className="flex justify-center mb-3">{tech.icon}</div>
              <h3 className="text-lg font-semibold">{tech.name}</h3>
              <p className="text-gray-500 text-sm">{tech.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TechnologyStack;
