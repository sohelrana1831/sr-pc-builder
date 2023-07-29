import React from "react";
import { Avatar, Card, Rate } from "antd";
import RootLayouts from "@/components/layouts/RootLayouts";
const { Meta } = Card;
const featuredProduct = [
  {
    imageSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    productName:
      "AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon Vega 3 Graphics",
    category: "Desktop Processor",
    price: 49.99,
    status: "In Stock",
    rating: 4.5,
  },
  {
    imageSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    productName: "AMD Athlon 200GE AM4",
    category: "Desktop Processor",
    price: 49.99,
    status: "In Stock",
    rating: 4.5,
  },
  {
    imageSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    productName:
      "AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon Vega 3 Graphics",
    category: "Desktop Processor",
    price: 49.99,
    status: "In Stock",
    rating: 4.5,
  },
  {},
  {},
  {},
  {},
  {},
];

const categoryOption = [
  { key: "1", id: "1", category: "CPU / Processor" },
  { key: "2", id: "2", category: "Motherboard" },
  { key: "3", id: "3", category: "RAM" },
  { key: "4", id: "4", category: "Power Supply Unit" },
  { key: "5", id: "5", category: "Storage Device" },
  { key: "6", id: "6", category: "Monitor" },
];
const PcBuilder = () => (
  <Card title="PC Builder - Build Your Own Computer">
    {categoryOption.map((category) => (
      <Card
        style={{ marginTop: "8px" }}
        type="inner"
        title={category.category}
        extra={<a href="#">Choose</a>}
        actions={[
          <div>$ 1525.00</div>,
          <div>Category</div>,
          <Rate allowHalf disabled defaultValue={4.5} />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>
    ))}
  </Card>
);

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
