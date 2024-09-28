// ./pages/home/HomePage.jsx

import React from "react";
import CarouselComponent from "../../components/home/carousel/Carousel";
import IntroductionSection from "../../components/home/introduction/Introduction";

const HomePage = () => {
  return (
    <>
      <CarouselComponent />
      <IntroductionSection />
      {/* Thêm các component khác */}
    </>
  );
};

export default HomePage;
