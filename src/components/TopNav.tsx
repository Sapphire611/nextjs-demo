import { PlusOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import React from "react";
const { Header } = Layout;
const TopNav: React.FC = () => {
  return (
    <>
      <Header style={{ background: "#fff", padding: 0 }}>
        <Button
          type="text"
          icon={<PlusOutlined />}
          style={{ fontSize: "16px", width: 64, height: 64 }}
        />
      </Header>
    </>
  );
};

export default TopNav;
