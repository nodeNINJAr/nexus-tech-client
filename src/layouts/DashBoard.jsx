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
import { Link, Outlet } from "react-router-dom";
import { BiSpreadsheet } from "react-icons/bi";
import { MdManageHistory } from "react-icons/md";

// import from layouts
const { Header, Sider, Content } = Layout;

// 
const DashBoard = () => {
  const [userRole] = useRole();
  console.log(userRole);

  // for menu collapse
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  //
  return (
    <Layout className="container mx-auto">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className=" bg-slate-300">
          <h1 className="text-2xl py-4 font-orbitron truncate">NexusTech</h1>
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
        {/* menu for employee */}
         {userRole === "employee" &&
           <Menu
           className="pt-6"
           theme="dark"
           mode="inline"
           defaultSelectedKeys={["1"]}
           items={[
             {
               key: "1",
               icon: <BiSpreadsheet style={{fontSize:"16px"}}/>,
               label: <Link to="/dashboard/work-sheet">Worksheet</Link>,
             },
             {
               key: "2",
               icon: <MdManageHistory style={{fontSize:"16px"}}/>,
               label:<Link to="/dashboard/payment-history">Payment history</Link>,
             },
             {
               key: "3",
               icon: <UserOutlined style={{fontSize:"16px"}} />,
               label:<Link to="/dashboard/profile">Profile</Link>,
             },
           ]}
         />
         }
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
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashBoard;
