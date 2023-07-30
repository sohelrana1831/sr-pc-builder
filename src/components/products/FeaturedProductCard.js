import React from "react";
import {
  DollarOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Col, Rate, Row, Typography } from "antd";
import router from "next/router";
import Image from "next/image";
const { Title, Text } = Typography;
const { Meta } = Card;

const FeaturedProductCard = ({
  id,
  imageSrc,
  productName,
  category,
  price,
  status,
  average_rating,
}) => (
  <Card
    style={{ marginTop: "12px", border: "1px solid #ccc" }}
    className="responsive-card"
    cover={
      <Image
        onClick={() => router.push(`/product/${id}`)}
        style={{ border: "1px solid #ccc", cursor: "pointer" }}
        alt={productName}
        width={500}
        height={300}
        responsive
        src={imageSrc}
      />
    }
    actions={[<Text type="success">{status}</Text>, <div>Add To Build</div>]}
  >
    <Button type="text" onClick={() => router.push(`/product/${id}`)}>
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

export default FeaturedProductCard;
