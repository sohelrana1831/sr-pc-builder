import React from "react";
import {
  DollarOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col, Image, Rate, Row } from "antd";

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
    // title={<a href="#">{productName}</a>}
    className="responsive-card"
    cover={<Image alt={productName} src={imageSrc} />}
    actions={[
      <Rate allowHalf disabled defaultValue={rating} />,
      <div>{status}</div>,
    ]}
  >
    <h1>{productName?.slice(0, 26)}</h1>
    <Row>
      <Col span={16}>{category}</Col>
      <Col span={8}>
        <h1>$ {price}</h1>
      </Col>
    </Row>
  </Card>
);

export default FeaturedProductCard;
