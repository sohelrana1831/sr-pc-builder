// Import necessary components from ant.design library
import React from "react";
import { Card, Typography, List, Rate, Image, Row, Col } from "antd";
import RootLayouts from "@/components/layouts/RootLayouts";

const { Title, Text } = Typography;

const ProductDetailPage = ({ product }) => {
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
          <Title level={3}>{product?.productName}</Title>
          <Text>{product?.category}</Text>
          <br />
          <Text strong>Status: </Text>
          <Text type="success">{product?.status}</Text>
          <br />
          <Text strong>Price: </Text>
          <Text>$ {product?.price}</Text>
          <br />
          <Text>Description:</Text>
          <Text>{product?.description}</Text>
        </Col>
      </Row>
      <div style={{ padding: "20px" }}>
        <br />
        <Title level={4}>Key Features:</Title>
        <List
          size="small"
          bordered
          dataSource={[product?.keyFeatures]}
          renderItem={(item) => (
            <List.Item>
              <strong>{item.key}:</strong> {item.value}
            </List.Item>
          )}
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

// export async function getStaticPaths() {
//   const res = await fetch("http://localhost:3004/");
//   const products = await res.json();
//   console.log(products);

//   // Get the paths we want to prerender based on posts
//   // In production environments, prerender all pages
//   // (slower builds, but faster initial page load)
//   const paths = products.map((product) => ({
//     params: { id: product.id },
//   }));

//   // { fallback: false } means other routes should 404
//   return { paths, fallback: false };
// }

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:3004/productData/${params.id}`);
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
};
