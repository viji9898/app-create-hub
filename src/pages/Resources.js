import { FloatButton, Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";

import {
  MenuUnfoldOutlined,
  CodeSandboxOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useState } from "react";

export const Resources = () => {
  const { Content, Sider } = Layout;

  const [showFloat, setShowFloat] = useState(false);
  const items = [
    {
      key: "1",
      icon: "",
      label: (
        <Link
          style={{ textDecoration: "none", color: "grey", height: "20px" }}
          to="/resources/app-development"
        >
          App development
        </Link>
      ),
    },
    {
      key: "2",
      icon: "",
      label: (
        <Link
          style={{
            textDecoration: "none",
            color: "grey",
            height: "20px",
          }}
          to="/resources/hosting"
        >
          Hosting
        </Link>
      ),
    },
  ];

  const FloatIcon = () => (
    <FloatButton.Group
      icon={<MenuUnfoldOutlined />}
      type="primary"
      trigger="click"
    >
      <Link
        style={{ textDecoration: "none", color: "grey", height: "20px" }}
        to="/"
      >
        <FloatButton
          icon={<HomeOutlined />}
          tooltip={<div>Home</div>}
          style={{ margin: "5px 0px" }}
        />
      </Link>
      <Link
        style={{ textDecoration: "none", color: "grey", height: "20px" }}
        to="/resources/app-development"
      >
        <FloatButton
          icon={<CodeSandboxOutlined />}
          tooltip={<div>App Development</div>}
          style={{ margin: "5px 0px" }}
        />
      </Link>
      <Link
        style={{ textDecoration: "none", color: "grey", height: "20px" }}
        to="/resources/hosting"
      >
        <FloatButton
          tooltip={<div>Hosting</div>}
          style={{ margin: "5px 0px" }}
        />
      </Link>
    </FloatButton.Group>
  );

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div
        style={{
          maxWidth: "1400px",
          width: "100%",
        }}
      >
        <Layout>
          <Sider
            style={{ backgroundColor: "white", minHeight: "500px" }}
            breakpoint="md"
            collapsedWidth="0"
            trigger={null}
            zeroWidthTriggerStyle={<FloatButton />}
            onCollapse={() => {
              setShowFloat(!showFloat);
            }}
          >
            <Menu
              theme="white"
              mode="inline"
              items={items}
              style={{ height: "20px" }}
              defaultSelectedKeys={["1"]}
            />
          </Sider>
          <Layout>
            <Content
              style={{ height: "90vh", overflow: "scroll", width: "100%" }}
              hasSider
            >
              <Outlet />
              {showFloat && <FloatIcon />}
            </Content>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};
