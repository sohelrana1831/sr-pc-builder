import React from "react";
import { Button, Card, Checkbox, Col, Form, Image, Input, Row } from "antd";
import SocialLogin from "@/components/login/SocialLogin";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => (
  <>
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/futuristic-technology-illuminates-robotic-arm-laboratory-generated-by-ai_188544-29912.jpg?size=626&ext=jpg&uid=R111232034&ga=GA1.1.1840433942.1690574229&semt=ais_ai_generated')",
        height: "100vh",
      }}
    >
      <Row>
        <Col span={6} offset={16}>
          <Card
            style={{ minHeight: "50vh", marginTop: "20%", background: "#ccc" }}
          >
            <SocialLogin title={"login"} />
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 400 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  </>
);

export default Login;
