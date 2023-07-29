import React from "react";
import {
  DollarOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Col, Image, Rate, Row, Typography } from "antd";
import router from "next/router";
const { Title, Text } = Typography;
const { Meta } = Card;

const FeaturedProductCard = ({
  imageSrc,
  productName,
  category,
  price,
  status,
  rating,
}) => (
  <Card
    style={{ marginTop: "8px" }}
    className="responsive-card"
    cover={<Image alt={productName} src={imageSrc} />}
    actions={[<Text type="success">{status}</Text>, <div>Add To Build</div>]}
  >
    <Button type="text" onClick={() => router.push(`/product/${productName}`)}>
      {productName?.slice(0, 26)}
    </Button>
    <Row>
      <Col span={16}>
        {category}
        <Rate allowHalf disabled defaultValue={rating} />
      </Col>
      <Col span={8}>
        <h1>$ {price}</h1>
      </Col>
    </Row>
  </Card>
);

export default FeaturedProductCard;
