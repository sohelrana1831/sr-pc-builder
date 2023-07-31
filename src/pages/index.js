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
  const categories = featuredProduct?.map((category) => ({
    category: category.category,
    categoryId: category.categoryId,
  }));
  // Create a Set to store unique category and categoryId pairs
  const uniqueCategories = new Set();

  // Filter out the unique category and categoryId pairs
  const uniqueData = categories?.filter((item) => {
    const key = `${item.category}_${item.categoryId}`;
    if (!uniqueCategories.has(key)) {
      uniqueCategories.add(key);
      return true;
    }
    return false;
  });

  return (
    <>
      <HomeSlider />
      <Card style={{ marginTop: "8px" }} title="Categories">
        {uniqueData?.map((item) => {
          return (
            <Card.Grid style={gridStyle}>
              <Button
                type="text"
                onClick={() => router.push(`/category/${item.categoryId}`)}
                key={item.categoryId}
              >
                {item.category}
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
                <ProductCard product={product} />
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
    const res = await fetch(`${process.env.API_URL}/api/product`);
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
      revalidate: 5,
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        featuredProduct: null, // or any default value if needed
      },
      revalidate: 5,
    };
  }
};
