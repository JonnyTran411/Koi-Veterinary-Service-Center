// ./pages/home/HomePage.jsx

import React from "react";
import CarouselComponent from "../../components/home/carousel/Carousel";
import IntroductionSection from "../../components/home/introduction/Introduction";
import ServicesOverview from "../../components/home/servicesOverviews/Services";

const HomePage = () => {
  return (
    <>
      <CarouselComponent />
      <IntroductionSection />
      <ServicesOverview />
      {/* Thêm các component khác */}
    </>
  );
};

export default HomePage;
