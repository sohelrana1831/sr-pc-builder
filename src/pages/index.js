import HomeSlider from "@/components/home/HomeSlider";
import RootLayouts from "@/components/layouts/RootLayouts";
import ProductCard from "@/components/products/FeaturedProductCard";
import { Button, Card, Col, Row } from "antd";
import router from "next/router";
const style = {
  padding: "2px 0",
};

const gridStyle = {
  width: "33.33%",
  textAlign: "center",
};

// const featuredProduct = [
//   {
//     imageSrc:
//       "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//     productName:
//       "AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon Vega 3 Graphics",
//     category: "Desktop Processor",
//     price: 49.99,
//     status: "In Stock",
//     rating: 4.5,
//   },
//   {
//     imageSrc:
//       "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//     productName: "AMD Athlon 200GE AM4",
//     category: "Desktop Processor",
//     price: 49.99,
//     status: "In Stock",
//     rating: 4.5,
//   },
//   {
//     imageSrc:
//       "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//     productName:
//       "AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon Vega 3 Graphics",
//     category: "Desktop Processor",
//     price: 49.99,
//     status: "In Stock",
//     rating: 4.5,
//   },
//   {},
//   {},
//   {},
//   {},
//   {},
// ];

const categoryOption = [
  {
    key: "1",
    id: "1",
    link: "cpu-processor",
    category: "CPU / Processor",
  },
  { key: "2", id: "2", link: "motherboard", category: "Motherboard" },
  { key: "3", id: "3", link: "RAM", category: "RAM" },
  {
    key: "4",
    id: "4",
    link: "power-supply-unit",
    category: "Power Supply Unit",
  },
  { key: "5", id: "5", link: "storage-device", category: "Storage Device" },
  { key: "6", id: "6", link: "monitor", category: "Monitor" },
];
export default function Home({ featuredProduct }) {
  return (
    <>
      <HomeSlider />
      <Card style={{ marginTop: "8px" }} title="Categories">
        {categoryOption.map((item) => (
          <Card.Grid style={gridStyle}>
            <Button
              type="text"
              onClick={() => router.push(`/category/${item.link}`)}
              key={item.key}
            >
              {item.category}
            </Button>
          </Card.Grid>
        ))}
      </Card>
      <Card style={{ marginTop: "8px" }} title="Featured Products">
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {featuredProduct?.map((featuredProduct) => (
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
                <ProductCard {...featuredProduct} />
              </div>
            </Col>
          ))}
        </Row>
      </Card>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3004/productData");
  const result = await res.json();
  return {
    props: { featuredProduct: result },
    revalidate: 10,
  };
};
