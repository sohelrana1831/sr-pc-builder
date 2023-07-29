import React from "react";
import { Button, Col, Dropdown, Layout, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import router from "next/router";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
const { Header } = Layout;
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

const HeaderTop = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <Header
        style={{
          display: "flex",
          alignItems: "space-between",
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
        </Menu>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            width: "20%",
            display: "flex",
            fontSize: "20px",
            justifyContent: "space-between",
          }}
        >
          <Menu.Item className="float-right">
            <Button onClick={() => router.push("/pc-builder")}>
              PC Builder
            </Button>
          </Menu.Item>
          {!session?.user ? (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/login"
            >
              <items>Login</items>
            </Link>
          ) : (
            <items>
              <Button onClick={() => signOut()} type="primary" danger>
                Logout
              </Button>
            </items>
          )}
        </Menu>
      </Header>
    </>
  );
};

export default HeaderTop;
