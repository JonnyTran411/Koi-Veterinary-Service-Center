import React, { lazy, memo, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/home/Homepage";
import LoadingPage from "../pages/loading/LoadingPage";
import ServicesRoutes from "./ServiceRoutes";

const NotFound = lazy(() => import("../pages/notfound/NotFound"));

const AppRoutes = memo(() => (
  <Suspense fallback={<LoadingPage />}>
    <Routes>
      {/* Các route dành cho khách hàng
      <Route path="/" element={<CustomerLayout />}>
        <Route path="/*" element={<CustomerRoutes />} />
      </Route> */}

      {/* Route cho dịch vụ */}
      <Route path="/services/*" element={<ServicesRoutes />} />

      {/* Các route dành cho Auth
      <Route path="/auth/*" element={<AuthLayout />}>
        <Route path="/*" element={<AuthRoutes />} />
      </Route> */}
      {/* Các route dành cho Admin
      <Route path="/admin" element={<AdminLayout />}>
        {ManagerRoutes}
      </Route> */}
      {/* Các route dành cho Veterinarian
      {VeterinarianRoutes} */}
      {/* Route 404 */}
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
));

export default AppRoutes;
