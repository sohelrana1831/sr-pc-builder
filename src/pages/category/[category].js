import React from "react";
import { useRouter } from "next/router";
import RootLayouts from "@/components/layouts/RootLayouts";
import FeaturedProductCard from "@/components/products/FeaturedProductCard";
import { Card, Col, Row } from "antd";

const style = {
  padding: "2px 0",
};

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

const CategoryPage = () => {
  const router = useRouter();
  const category = router.query.category;
  console.log(category);
  return (
    <>
      <Card title={category}>
        {/* <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {featuredProduct.map((featuredProduct) => (
            <Col
              className="gutter-row gap-2"
              xs={{
                span: 24,
              }}
              md={{
                span: 8,
              }}
              lg={{
                span: 6,
              }}
            >
              <div style={style}>
                <FeaturedProductCard {...featuredProduct} />
              </div>
            </Col>
          ))}
        </Row> */}
      </Card>
    </>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
