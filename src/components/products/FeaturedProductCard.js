import React from "react";
import { Button, Card, Col, Rate, Row, Typography } from "antd";
import router from "next/router";
import Image from "next/image";
import { setComponent } from "@/redux/features/PCBuilder/pcBuilderSlice";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
const { Text } = Typography;

const FeaturedProductCard = ({ product }) => {
  const {
    _id,
    imageSrc,
    productName,
    category,
    price,
    status,
    average_rating,
  } = product;

  const dispatch = useDispatch();
  const { data: session } = useSession();
  return (
    <Card
      style={{ marginTop: "12px", border: "1px solid #ccc" }}
      className="responsive-card"
      cover={
        <Image
          onClick={() => router.push(`/product/${_id}`)}
          style={{ border: "1px solid #ccc", cursor: "pointer" }}
          alt={productName}
          width={500}
          height={300}
          responsive
          src={imageSrc}
        />
      }
      actions={[
        <Text type="success">{status}</Text>,
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
        </Button>,
      ]}
    >
      <Button type="text" onClick={() => router.push(`/product/${_id}`)}>
        {productName?.slice(0, 26)}
      </Button>
      <Row>
        <Col span={16}>
          {category}
          <br />
          <Rate allowHalf disabled defaultValue={average_rating} />
        </Col>
        <Col span={8}>
          <h1>$ {price}</h1>
        </Col>
      </Row>
    </Card>
  );
};

export default FeaturedProductCard;
