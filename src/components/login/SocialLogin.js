import React from "react";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
const { Title } = Typography;
const SocialLogin = () => {
  const router = useRouter();

  const { callbackUrl } = router.query;
  console.log(router);
  return (
    <>
      <>
        <div style={{ textAlign: "center", margin: "8px" }}>
          <Title>Login with</Title>
          <div style={{ fontSize: "28px", padding: "8px" }}>
            {/* <GoogleOutlined
              style={{ textAlign: "center", marginRight: "18px" }}
            /> */}
            <GithubOutlined
              onClick={() => signIn("github", { callbackUrl: callbackUrl })}
            />
          </div>
          <hr />
        </div>
      </>
    </>
  );
};

export default SocialLogin;
