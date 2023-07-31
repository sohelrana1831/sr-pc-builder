import React from "react";
import { useRouter } from "next/router";
import RootLayouts from "@/components/layouts/RootLayouts";
import FeaturedProductCard from "@/components/products/FeaturedProductCard";
import { Card, Col, Row } from "antd";

const style = {
  padding: "2px 0",
};

const CategoryPage = ({ featuredProduct }) => {
  return (
    <>
      <Card title={featuredProduct?.length > 0 && featuredProduct[0]?.category}>
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
                <FeaturedProductCard product={product} />
              </div>
            </Col>
          ))}
        </Row>
      </Card>
    </>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  console.log("p data", params);
  try {
    const res = await fetch(
      `http://localhost:3000/api/category/${params.categoryId}`
    );
    console.log("first", res);
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
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        featuredProduct: null, // or any default value if needed
      },
    };
  }
};
