"use client";

import "./globals.css";
import { Layout } from "antd";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import MyFooter from "../components/MyFooter";
const { Content } = Layout;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout style={{ minHeight: "100vh", display: "flex" }}>
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <Layout>
            {/* Navbar */}
            <TopNav />

            <Content style={{ margin: "24px 16px 0" }}>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                <>{children}</>
              </div>
            </Content>

            <MyFooter />
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
