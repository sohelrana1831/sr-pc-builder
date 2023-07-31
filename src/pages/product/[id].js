// Import necessary components from ant.design library
import React from "react";
import { Card, Typography, List, Rate, Row, Col, Button } from "antd";
import RootLayouts from "@/components/layouts/RootLayouts";
import Image from "next/image";
import { setComponent } from "@/redux/features/PCBuilder/pcBuilderSlice";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import router from "next/router";

const { Title, Text } = Typography;

const ProductDetailPage = ({ product }) => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
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
          <br />
          <Button
            onClick={() => {
              if (session?.user) {
                dispatch(setComponent(product));
                router.back("/pc-builder");
              } else {
                router.back("/login");
              }
            }}
            type="primary"
            key="addToBuilder"
          >
            Add To Builder
          </Button>
          <br />
          <br />
          <br />
          <Text strong>Description: </Text>
          <Text>{product?.description}</Text>
        </Col>
      </Row>
      <div style={{ padding: "20px" }}>
        <br />
        <Title level={4}>Key Features:</Title>
        <List
          size="small"
          bordered
          dataSource={Object.entries(product?.keyFeatures).map(
            ([key, value]) => ({
              key,
              value,
            })
          )}
          renderItem={renderItem}
        />
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

export const getServerSideProps = async (context) => {
  const { params } = context;
  try {
    const res = await fetch(`${process.env.API_URL}/api/product/${params.id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data from the API.");
    }

    // Read the response body and parse it as JSON to get the data
    const data = await res.json();
    // Return the data as props
    return {
      props: {
        product: data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        product: null, // or any default value if needed
      },
    };
  }
};
