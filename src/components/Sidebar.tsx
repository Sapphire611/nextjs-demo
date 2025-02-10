import { UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Menu, Layout, MenuProps } from "antd";
// import { NextRouter } from 'next/router';
// import { useRouter } from 'next/router';

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState("/");
  // const router: NextRouter = useRouter();

  const onClick: MenuProps["onClick"] = (e) => {
    // alert(`Hello, ${e.key}!`);
    // window.location.href = e.key;
    // 使用 react-router-dom 跳转
    setDefaultSelectedKeys(e.key);
    // router.push(e.key); // 使用 router.push 进行跳转
  };

  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          zIndex: 1,
          flex: "0 0 200px",
          maxWidth: "200px",
          minWidth: "200px",
          width: "200px",
        }}
      >
        <div className="h-16 flex items-center justify-center bg-gray-700 text-white">
          <span className="text-lg font-bold">CMS</span>
        </div>
        <Menu
          theme="dark"
          selectedKeys={[defaultSelectedKeys]}
          mode="inline"
          onClick={onClick}
          items={[
            {
              key: "/",
              icon: <UserOutlined />,
              label: "Dashboard",
            },
            {
              key: "/about",
              icon: <UserOutlined />,
              label: "About",
            },
            {
              key: "/users",
              icon: <UserOutlined />,
              label: "Users",
            },
          ]}
        ></Menu>
      </Sider>
    </>
  );
};

export default Sidebar;