import React, { useState } from "react";
import useRole from "../components/hooks/useRole";
import { SiPayloadcms } from "react-icons/si";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { BiSpreadsheet } from "react-icons/bi";
import { MdManageHistory } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { GiProgression } from "react-icons/gi";
import { FaRegListAlt } from "react-icons/fa";
import useAuth from "../components/hooks/useAuth";

// import from layouts
const { Header, Sider, Content } = Layout;

//
const DashBoard = () => {
  //
  const { userSignOut } = useAuth();
  const [userRole] = useRole();
  console.log(userRole);

  const location = useLocation();

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
  // admin menu
  const adminMenu = [
    {
      key: "1",
      icon: <FaRegListAlt />,
      label: "All Employee",
      route: "/dashboard/all-employee-list", // Use "route" instead of "path" to avoid conflicts
    },
    {
      key: "2",
      icon: <SiPayloadcms />,
      label: "Payroll",
      route: "/dashboard/payroll",
    },
    {
      key: "3",
      icon: <UserOutlined style={{ fontSize: "16px" }} />,
      label: "Profile",
      route: "/dashboard/profile",
    },
  ];

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
      label: "Worksheet",
      route: "/dashboard/work-sheet",
    },
    {
      key: "2",
      icon: <MdManageHistory style={{ fontSize: "16px" }} />,
      label: "Payment history",
      route: "/dashboard/payment-history",
    },
    {
      key: "3",
      icon: <UserOutlined style={{ fontSize: "16px" }} />,
      label: <Link to="">Profile</Link>,
      route: "/dashboard/profile",
    },
  ];

  // Find the menu item that matches the current route
  const adminActiveKey = adminMenu.find((item) =>
    location.pathname.includes(item.route)
  )?.key;
  const hrActiveKey = hrMenu.find((item) =>
    location.pathname.includes(item.route)
  )?.key;
  const employeeActiveKey = employeeMenu.find((item) =>
    location.pathname.includes(item.route)
  )?.key;

  //
  return (
    <Layout className="container mx-auto">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className=" bg-slate-300 py-4">
          <Link to="/" className="text-2xl font-orbitron ">
            <span className="truncate block">NexusTech</span>
          </Link>
        </div>

        {/* menu for admin */}
        {userRole === "admin" && (
          <Menu
            className="pt-6"
            theme="dark"
            mode="inline"
            selectedKeys={[adminActiveKey]}
            onClick={({ key }) => {
              const selectedItem = adminMenu.find((item) => item.key === key);
              if (selectedItem?.route) {
                navigate(selectedItem.route);
              }
            }}
            items={adminMenu.map((item) => ({
              key: item.key,
              icon: item.icon,
              label: item.label,
            }))}
          />
        )}
        {/* menu for hr role */}
        {userRole === "hr" && (
          <Menu
            className="pt-6"
            theme="dark"
            mode="inline"
            selectedKeys={[hrActiveKey]}
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
            selectedKeys={[employeeActiveKey]}
            onClick={({ key }) => {
              const selectedItem = employeeMenu.find(
                (item) => item.key === key
              );
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
