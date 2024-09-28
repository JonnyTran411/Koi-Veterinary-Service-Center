// ./pages/home/HomePage.jsx

import React from "react";
import CarouselComponent from "../../components/carousel/Carousel";

const HomePage = () => {
  return (
    <>
      <CarouselComponent />
      <div>
        <h1>Chào mừng đến với Koi Veterinary Service Center</h1>
        <p>Đây là trang chủ của trung tâm dịch vụ thú y cá Koi.</p>
      </div>
      {/* Thêm các component khác */}
    </>
  );
};

export default HomePage;
