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

export default function Home({ featuredProduct }) {
  const categories = featuredProduct?.map((category) => category.category);
  const uniqueCategories = [...new Set(categories)];
  console.log(featuredProduct);
  return (
    <>
      <HomeSlider />
      <Card style={{ marginTop: "8px" }} title="Categories">
        {uniqueCategories.map((item) => {
          return (
            <Card.Grid style={gridStyle}>
              <Button
                type="text"
                onClick={() => router.push(`/category/${item}`)}
                key={item}
              >
                {item}
              </Button>
            </Card.Grid>
          );
        })}
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
          {featuredProduct?.map((product) => (
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
                <ProductCard {...product} />
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
  try {
    // Fetch data from the API route you created in Next.js
    const res = await fetch("http://localhost:3000/api/product");
    if (!res.ok) {
      throw new Error("Failed to fetch data from the API.");
    }

    // Read the response body and parse it as JSON to get the data
    const data = await res.json();
    // Return the data as props
    return {
      props: {
        featuredProduct: data,
      },
      revalidate: 10,
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
