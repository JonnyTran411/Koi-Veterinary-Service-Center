// src/components/home/Homepage.jsx
import React, { lazy, memo, Suspense } from "react";
import Footer from "../../components/layout/footer/Footer";
import Navigation from "../../components/layout/navigation/Navigation";
import LoadingPage from "../loading/LoadingPage";
import "./Homepage.scss";

const HeroSection = lazy(() =>
  import("../../components/home/hero-section/HeroSection")
);

const Homepage = memo(() => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Navigation />
      <div className="homepage">
        <HeroSection />
      </div>
      <Footer />
    </Suspense>
  );
});

export default Homepage;
