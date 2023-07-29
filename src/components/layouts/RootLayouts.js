import React from "react";
import { Affix, Breadcrumb, Button, Dropdown, Layout, Menu, theme } from "antd";
import { DownOutlined } from "@ant-design/icons";
import router from "next/router";

const { Header, Content, Footer } = Layout;
// Sample menu items
const menuItems = [
  { key: "1", title: "Home", link: "/" },
  { key: "2", title: "About", link: "/about" },
  { key: "3", title: "Contact", link: "/contact" },
];
const categoryOption = [
  {
    key: "1",
    id: "1",
    link: "cpu-processor",
    category: "CPU / Processor",
  },
  { key: "2", id: "2", link: "motherboard", category: "Motherboard" },
  { key: "3", id: "3", link: "RAM", category: "RAM" },
  {
    key: "4",
    id: "4",
    link: "power-supply-unit",
    category: "Power Supply Unit",
  },
  { key: "5", id: "5", link: "storage-device", category: "Storage Device" },
  { key: "6", id: "6", link: "monitor", category: "Monitor" },
];

// Sample dropdown menu items
const dropdownMenu = (
  <Menu>
    {categoryOption.map((item) => (
      <Menu.Item
        onClick={() => router.push(`/category/${item.link}`)}
        key={item.key}
      >
        {item.category}
      </Menu.Item>
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
              <Menu.Item
                onClick={() => router.push(`/${item.link}`)}
                key={item.key}
              >
                {item.title}
              </Menu.Item>
            ))}
            <Menu.Item key="dropdown">
              <Dropdown overlay={dropdownMenu}>
                <span>
                  Categories <DownOutlined />
                </span>
              </Dropdown>
            </Menu.Item>
            <Menu.Item className="float-right">
              <Button onClick={() => router.push("/pc-builder")}>
                PC Builder
              </Button>
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
