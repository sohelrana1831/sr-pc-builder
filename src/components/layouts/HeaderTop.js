import React from "react";
import { Button, Col, Dropdown, Layout, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import router from "next/router";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
const { Header } = Layout;
// Sample menu items
const menuItems = [{ key: "1", title: " SR PC Builder", link: "/" }];
const categoryOption = [
  {
    key: "1",
    categoryId: "1",
    category: "CPU / Processor",
  },
  { key: "2", categoryId: "2", link: "motherboard", category: "Motherboard" },
  { key: "3", categoryId: "3", link: "RAM", category: "RAM" },
  {
    key: "4",
    categoryId: "4",
    link: "power-supply-unit",
    category: "Power Supply Unit",
  },
  {
    key: "5",
    categoryId: "5",
    link: "storage-device",
    category: "Storage Device",
  },
  { key: "6", categoryId: "6", link: "monitor", category: "Monitor" },
];

// Sample dropdown menu items
const dropdownMenu = (
  <Menu>
    {categoryOption.map((item) => (
      <Menu.Item
        onClick={() => router.push(`/category/${item.categoryId}`)}
        key={item.key}
      >
        {item.category}
      </Menu.Item>
    ))}
  </Menu>
);

const HeaderTop = () => {
  const { data: session } = useSession();
  return (
    <>
      <Header
        style={{
          display: "flex",
          alignItems: "space-between",
        }}
      >
        {/* Your header content goes here */}

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

export const getStaticProps = async () => {
  try {
    // Fetch data from the API route you created in Next.js
    const res = await fetch("http://localhost:3000/api/product");
    if (!res.ok) {
      throw new Error("Failed to fetch data from the API.");
    }

    // Read the response body and parse it as JSON to get the data
    const data = await res.json();
    // Return the data as props
    return {
      props: {
        featuredProduct: data,
      },
      revalidate: 5,
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        featuredProduct: null, // or any default value if needed
      },
      revalidate: 5,
    };
  }
};
