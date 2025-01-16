"use client"; // 添加这一行以将组件标记为客户端组件
import '@ant-design/v5-patch-for-react-19';
import React from "react";
import { Form, Input, Button } from "antd";

export default function Home() {
  const onFinish = (values: { username: string; password: string }) => {
    console.log("Received values of form: ", values);

    const { username, password } = values;
    if (username === "admin" && password === "123456") {
      // 跳转到about界面
      window.location.href = "/";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "linear-gradient(135deg,rgb(220, 222, 236),rgb(81, 142, 247))",
        backgroundSize: "cover",
      }}
    >
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{ width: "300px" }}
      >
        <h1 className="text-3xl text-center mb-5">Login</h1>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
