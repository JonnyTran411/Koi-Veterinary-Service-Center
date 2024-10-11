import React from "react";
import { Route, Routes } from "react-router-dom";
import ServiceLayouts from "../layouts/services/ServiceLayouts";
import OnlineConsultation from "../pages/services/online/OnlineConsultation";

const ServicesRoutes = () => {
  return (
    <Routes>
      <Route element={<ServiceLayouts />}>
        <Route index element={<div>Welcome to Services</div>} />
        <Route path="online-consultation" element={<OnlineConsultation />} />
      </Route>
    </Routes>
  );
};

export default ServicesRoutes;
