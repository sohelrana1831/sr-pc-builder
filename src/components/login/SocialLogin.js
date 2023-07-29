import React from "react";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { signIn } from "next-auth/react";
const { Title } = Typography;
const SocialLogin = () => {
  return (
    <>
      <>
        <div style={{ textAlign: "center", margin: "8px" }}>
          <Title>Login with</Title>
          <div style={{ fontSize: "28px", padding: "8px" }}>
            <GoogleOutlined
              style={{ textAlign: "center", marginRight: "18px" }}
            />
            <GithubOutlined
              onClick={() =>
                signIn("github", { callbackUrl: "http://localhost:3000/" })
              }
            />
          </div>
          <hr />
        </div>
      </>
    </>
  );
};

export default SocialLogin;
