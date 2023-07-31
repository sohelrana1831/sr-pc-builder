import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Rate,
  Tooltip,
  Typography,
  Modal,
  Result,
} from "antd";
import RootLayouts from "@/components/layouts/RootLayouts";
import router, { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { CloseOutlined } from "@ant-design/icons";
import {
  emptyComponent,
  removeComponent,
} from "@/redux/features/PCBuilder/pcBuilderSlice";
const { Meta } = Card;
const { Text } = Typography;

const PcBuilder = ({ featuredProduct }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { components } = useAppSelector((state) => state.pcBuilder);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
    <Card title="PC Builder - Build Your Own Computer">
      {uniqueData?.map((category) => {
        const component = components?.find(
          (comp) => comp.categoryId === category.categoryId
        );
        return (
          <Card
            style={{ marginTop: "8px" }}
            type="inner"
            title={category.category}
            extra={
              <>
                {category.categoryId === component?.categoryId ? (
                  <div>
                    <Tooltip title="Remove">
                      <Button
                        danger
                        icon={<CloseOutlined />}
                        onClick={() => dispatch(removeComponent(component))}
                      />
                    </Tooltip>
                  </div>
                ) : (
                  <Button
                    onClick={() =>
                      router.push(`/category/${category?.categoryId}`)
                    }
                    type="primary"
                    className="bg-sky-800"
                  >
                    Choose/Select
                  </Button>
                )}
              </>
            }
            actions={[
              <div> $ {component?.price}</div>,
              <Text type="success">{component?.status}</Text>,
              <Rate
                allowHalf
                disabled
                defaultValue={0}
                value={component?.average_rating}
              />,
            ]}
          >
            <Meta
              avatar={
                <Avatar shape="square" size="large" src={component?.imageSrc} />
              }
              title={component?.productName}
              description={component?.description}
            />
          </Card>
        );
      })}
      <br />
      {console.log(uniqueData?.length, components?.length)}
      <Button
        onClick={() => setIsModalOpen(true)}
        disabled={
          uniqueData?.length > 0 && uniqueData?.length != components?.length
        }
        type="primary"
        className="h-12"
      >
        Complete Build
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Result
          status="success"
          title="You have successfully built your pc!"
          subTitle="You can build more pc as your desired with favorite components!"
          extra={[
            <Button
              onClick={() => {
                dispatch(emptyComponent());
                setIsModalOpen(false);
                router.push("/");
              }}
              type="primary"
              key="home"
            >
              Go Home
            </Button>,
            <Button
              key="build_again"
              onClick={() => {
                dispatch(emptyComponent());
                setIsModalOpen(false);
              }}
            >
              Build Again
            </Button>,
          ]}
        />
      </Modal>
    </Card>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};

export const getServerSideProps = async () => {
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
