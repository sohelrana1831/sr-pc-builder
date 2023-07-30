// Import necessary components from ant.design library
import React from "react";
import { Card, Typography, List, Rate, Row, Col } from "antd";
import RootLayouts from "@/components/layouts/RootLayouts";
import Image from "next/image";

const { Title, Text } = Typography;

const ProductDetailPage = ({ product }) => {
  const renderItem = (item) => (
    <List.Item>
      {/* `item` is an object with `key` and `value` properties */}
      <strong>{item.key}:</strong> {item.value}
    </List.Item>
  );
  return (
    <Card style={{ maxWidth: 1400, margin: "20px auto" }}>
      <Row gutter={24}>
        <Col span={12}>
          <Image
            style={{ border: "1px solid #ccc", cursor: "pointer" }}
            alt={product?.productName}
            width={500}
            height={300}
            responsive
            src={product?.imageSrc}
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
        {/* <List
          size="small"
          bordered
          dataSource={Object.entries(product?.keyFeatures).map(
            ([key, value]) => ({
              key,
              value,
            })
          )}
          renderItem={renderItem}
        /> */}
        <div style={{ marginTop: "20px" }}>
          <Text strong>Individual Rating: </Text>
          <Rate allowHalf defaultValue={product?.individual_rating} />
          <br />
          <Text strong>Average Rating: </Text>
          <Rate allowHalf disabled value={product?.average_rating} />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Title level={4}>Reviews:</Title>
          <List
            size="large"
            bordered
            dataSource={product?.reviews}
            renderItem={(item) => (
              <List.Item>
                <strong style={{ textTransform: "capitalize" }}>
                  {item.name} :
                </strong>
                {item.body}
              </List.Item>
            )}
          />
        </div>
      </div>
    </Card>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};

export const getStaticPaths = async () => {
  const response = await fetch(`http://localhost:3000/api/product`);
  const products = await response.json();
  const paths = products?.map((prod) => ({
    params: { id: prod._id },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  try {
    const res = await fetch(`http://localhost:3000/api/product/${params.id}`);
    console.log({ res });
    if (!res.ok) {
      throw new Error("Failed to fetch data from the API.");
    }

    // Read the response body and parse it as JSON to get the data
    const data = await res.json();
    console.log({ data });
    // Return the data as props
    return {
      props: {
        // featuredProduct: data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        featuredProduct: null, // or any default value if needed
      },
      revalidate: 10,
    };
  }
};
