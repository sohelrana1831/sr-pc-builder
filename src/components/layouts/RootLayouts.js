import React from "react";
import { Affix, Breadcrumb, Button, Dropdown, Layout, Menu, theme } from "antd";

import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Header, Content, Footer } = Layout;
// Sample menu items
const menuItems = [
  { key: "1", title: "Home", link: "/" },
  { key: "2", title: "About", link: "/about" },
  { key: "3", title: "Contact", link: "/contact" },
];
const dropdownOption = [
  { key: "1", title: "CPU / Processor" },
  { key: "2", title: "Motherboard" },
  { key: "3", title: "RAM" },
  { key: "4", title: "Power Supply Unit" },
  { key: "5", title: "Storage Device" },
  { key: "6", title: "Monitor" },
];

// Sample dropdown menu items
const dropdownMenu = (
  <Menu>
    {dropdownOption.map((item) => (
      <Menu.Item key={item.key}>{item.title}</Menu.Item>
    ))}
  </Menu>
);
const RootLayouts = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Affix offsetTop={0}>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Your header content goes here */}
          <div className="logo">Logo</div>
          <Menu
            style={{ width: "100%" }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
          >
            {menuItems.map((item) => (
              <Menu.Item key={item.key}>{item.title}</Menu.Item>
            ))}
            <Menu.Item key="dropdown">
              <Dropdown overlay={dropdownMenu}>
                <span>
                  Categories <DownOutlined />
                </span>
              </Dropdown>
            </Menu.Item>
            <Menu.Item className="float-right">
              <Button>PC Builder</Button>
            </Menu.Item>
          </Menu>
        </Header>
      </Affix>
      <Content
        className="site-layout-content"
        style={{
          padding: "0 50px",
          // height: "100vh",
        }}
      >
        {children}
      </Content>
      <Footer className="app-footer">
        {/* Your footer content goes here */}© {new Date().getFullYear()} Your
        Company Name. All rights reserved.
      </Footer>
    </Layout>
  );
};

export default RootLayouts;
