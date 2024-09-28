// ./pages/home/HomePage.jsx

import React from "react";
import CarouselComponent from "../../components/home/carousel/Carousel";
import IntroductionSection from "../../components/home/introduction/Introduction";
import News from "../../components/home/news/News";
import ServicesOverview from "../../components/home/servicesOverviews/Services";
import Testimonials from "../../components/home/testimonials/Testimonials";
import Veterian from "../../components/home/veterian/Veterian";

const HomePage = () => {
  return (
    <>
      <CarouselComponent />
      <IntroductionSection />
      <ServicesOverview />
      <Veterian />
      <Testimonials />
      <News />
      {/* Thêm các component khác */}
    </>
  );
};

export default HomePage;
