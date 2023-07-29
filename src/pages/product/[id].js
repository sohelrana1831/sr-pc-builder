// Import necessary components from ant.design library
import React from "react";
import { Card, Typography, List, Rate, Image, Row, Col } from "antd";
import RootLayouts from "@/components/layouts/RootLayouts";

const { Title, Text } = Typography;

const ProductDetailPage = () => {
  return (
    <Card style={{ maxWidth: 1400, margin: "20px auto" }}>
      <Row gutter={24}>
        <Col span={12}>
          <Image
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            alt="Product Image"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
        <Col span={12}>
          <Title level={3}>Product Name</Title>
          <Text>Category</Text>
          <br />
          <Text strong>Status: </Text>
          <Text type="success">In Stock</Text>
          <br />
          <Text strong>Price: </Text>
          <Text>$99.99</Text>
          <br />
          <Text>Description:</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
            risus quam.
          </Text>
        </Col>
      </Row>
      <div style={{ padding: "20px" }}>
        <br />
        <Title level={4}>Key Features:</Title>
        <List
          size="small"
          bordered
          dataSource={[
            "Brand",
            "Model",
            "Specification",
            "Port",
            "Type",
            "Resolution",
            "Voltage",
            /* Add more features as needed */
          ]}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
        <div style={{ marginTop: "20px" }}>
          <Text strong>Individual Rating: </Text>
          <Rate allowHalf defaultValue={3.5} />
          <br />
          <Text strong>Average Rating: </Text>
          <Rate allowHalf disabled value={4.2} />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Title level={4}>Reviews:</Title>
          {/* Display individual reviews here */}
          {/* You can use a loop to dynamically show reviews if they are stored in an array or database */}
        </div>
      </div>
    </Card>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
