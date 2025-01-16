import React, { useState } from "react";
import useRole from "../components/hooks/useRole";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { BiSpreadsheet } from "react-icons/bi";
import { MdManageHistory } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { GiProgression } from "react-icons/gi";
import { FaRegListAlt } from "react-icons/fa"
import useAuth from "../components/hooks/useAuth";

// import from layouts
const { Header, Sider, Content } = Layout;

//
const DashBoard = () => {
  //
  const { userSignOut } = useAuth();
  const [userRole] = useRole();
  console.log(userRole);
  // user logout
  const handleLogout = () => {
    userSignOut();
  };

  // for menu collapse
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  //

  const navigate = useNavigate();
  // hr menu
  const hrMenu = [
    {
      key: "1",
      icon: <FaRegListAlt />,
      label: "Employee List",
      route: "/dashboard/employee-list", // Use "route" instead of "path" to avoid conflicts
    },
    {
      key: "2",
      icon: <GiProgression />,
      label: "Progress",
      route: "/dashboard/progress",
    },
    {
      key: "3",
      icon: <UserOutlined style={{ fontSize: "16px" }} />,
      label: "Profile",
      route: "/dashboard/profile",
    },
  ];
  // employee menu
  const employeeMenu = [
    {
      key: "1",
      icon: <BiSpreadsheet style={{ fontSize: "16px" }} />,
      label:"Worksheet",
      route:"/dashboard/work-sheet"
    },
    {
      key: "2",
      icon: <MdManageHistory style={{ fontSize: "16px" }} />,
      label: "Payment history",
      route:"/dashboard/payment-history"
    },
    {
      key: "3",
      icon: <UserOutlined style={{ fontSize: "16px" }} />,
      label: <Link to="">Profile</Link>,
      route:"/dashboard/profile"
    },
  ]

  // 
  return (
    <Layout className="container mx-auto">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className=" bg-slate-300 py-4">
          <Link to="/" className="text-2xl font-orbitron truncate">
            NexusTech
          </Link>
        </div>
        {/* menu for admin */}
        {useRole === "admin" && (
          <Menu
            className="pt-6"
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
        )}
        {/* menu for hr role */}
        {userRole === "hr" && (
          <Menu
            className="pt-6"
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            onClick={({ key }) => {
              const selectedItem = hrMenu.find((item) => item.key === key);
              if (selectedItem?.route) {
                navigate(selectedItem.route);
              }
            }}
            items={hrMenu.map((item) => ({
              key: item.key,
              icon: item.icon,
              label: item.label,
            }))}
          />
        )}
        {/* menu for employee */}
        {userRole === "employee" && (
               <Menu
               className="pt-6"
               theme="dark"
               mode="inline"
               defaultSelectedKeys={["1"]}
               onClick={({ key }) => {
                 const selectedItem = employeeMenu.find((item) => item.key === key);
                 if (selectedItem?.route) {
                   navigate(selectedItem.route);
                 }
               }}
               items={employeeMenu.map((item) => ({
                 key: item.key,
                 icon: item.icon,
                 label: item.label,
               }))}
             />
        )}
        {/*public menu */}
        <Menu
          className="border-t border-gray-400 mt-2"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "4",
              icon: <FiLogOut style={{ fontSize: "16px" }} />,
              label: <button onClick={handleLogout}>Logout</button>,
            },
          ]}
        />
      </Sider>

      {/* layouts */}
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          className="min-h-screen"
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashBoard;
