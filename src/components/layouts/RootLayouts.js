import React from "react";
import { Affix, Layout, Menu, theme } from "antd";
import HeaderTop from "./HeaderTop";

const { Content, Footer } = Layout;

const RootLayouts = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout className="layout">
        <Affix offsetTop={0}>
          <HeaderTop />
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
    </>
  );
};

export default RootLayouts;
