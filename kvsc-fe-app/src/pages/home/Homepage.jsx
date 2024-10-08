// src/components/home/Homepage.jsx
import React, { lazy, memo, Suspense } from "react";
import LoadingPage from "../loading/LoadingPage";
import "./Homepage.scss";

const HeroSection = lazy(() =>
  import("../../components/home/hero-section/HeroSection")
);

const Homepage = memo(() => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <div className="homepage">
        <HeroSection />
      </div>
    </Suspense>
  );
});

export default Homepage;
