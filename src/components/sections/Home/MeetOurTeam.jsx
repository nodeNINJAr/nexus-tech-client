import React from "react";
import { Card, Row, Col, Avatar } from "antd";
import { LinkedinOutlined, GithubOutlined, TwitterOutlined } from "@ant-design/icons";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "Jane Smith",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "Alex Johnson",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "Emily Brown",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
];

const MeetOurTeam = () => {
  return (
    <div className="w-full mx-auto pt-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-poppins">Meet Our Team</h2>

      <Row gutter={[16, 16]} justify="center">
        {teamMembers.map((member, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card hoverable className="text-center font-roboto">
              <Avatar src={member.image} size={100} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
              <div className="flex justify-center gap-3 mt-3">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedinOutlined style={{ fontSize: "20px", color: "#0077B5" }} />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <GithubOutlined style={{ fontSize: "20px", color: "#000" }} />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <TwitterOutlined style={{ fontSize: "20px", color: "#1DA1F2" }} />
                </a>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MeetOurTeam;
