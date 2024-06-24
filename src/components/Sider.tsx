import React from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import {
  UserOutlined,
  InfoCircleOutlined,
  MoreOutlined,
} from "@ant-design/icons";

const Sider: React.FC<{
  collapsed: true | false;
  setRouteValue: React.Dispatch<React.SetStateAction<string>>;
}> = ({ collapsed, setRouteValue }) => {
  type MenuItem = Required<MenuProps>["items"][number];

  const items: MenuItem[] = [
    { key: "1", icon: <UserOutlined />, label: "Users" },
    { key: "2", icon: <InfoCircleOutlined />, label: "Information" },
    { key: "3", icon: <MoreOutlined />, label: "More" },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    setRouteValue(typeof e.key);
  };

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
          onClick={onClick}
        />
      </Layout.Sider>
    </>
  );
};

export default Sider;
