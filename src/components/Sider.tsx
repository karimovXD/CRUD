import React from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { Link } from 'react-router-dom'
import {
  UserOutlined,
  InfoCircleOutlined,
  MoreOutlined,
} from "@ant-design/icons";

const Sider: React.FC<{
  collapsed: true | false;
}> = ({ collapsed }) => {
  type MenuItem = Required<MenuProps>["items"][number];

  const items: MenuItem[] = [
    { key: "1", icon: <UserOutlined />, label: <Link to='/'>Users</Link> },
    { key: "2", icon: <InfoCircleOutlined />, label: <Link to='/information'>Information</Link> },
    { key: "3", icon: <MoreOutlined />, label: <Link to='/more'>More</Link> },
  ];

  return (
    <>
      <Layout.Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={80}
        className="hidden ss:block"
      >
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
          items={items}
          className="h-full"
        />
      </Layout.Sider>
    </>
  );
};

export default Sider;
