import { Carousel, Image } from "antd";

const HomeSlider = () => {
  // Replace these image URLs with your actual image URLs
  const imageUrls = [
    "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    "https://media.istockphoto.com/id/532174758/photo/blue-circuit-with-binary-numbers.webp?b=1&s=170667a&w=0&k=20&c=qa9cx_1l_ROKia4aQT1wVXQxGm3T0BjRrpY6oTVnJuo=",
    "https://img.freepik.com/free-photo/computer-screen-with-number-pad-it_1340-42985.jpg?t=st=1690576532~exp=1690580132~hmac=2879935c111e457a1e9dfda654a7c8672291e1caca483c8dac305bd1d1db1f0c&w=996",
  ];

  return (
    <div
      className="image-slider"
      style={{
        width: "100%",
        margin: "0 auto",
        objectFit: "cover",
      }}
    >
      <Carousel autoplay>
        {imageUrls.map((imageUrl, index) => (
          <div key={index}>
            <Image
              style={{ width: "1400px", height: "400px", objectFit: "cover" }}
              src={imageUrl}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeSlider;
