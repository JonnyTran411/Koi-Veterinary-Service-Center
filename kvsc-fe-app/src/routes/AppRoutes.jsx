import React, { lazy, memo, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/home/Homepage";
import LoadingPage from "../pages/loading/LoadingPage";
import AdminRoutes from "./AdminRoutes";
import CustomerRoutes from "./CustomerRoutes";
import ServicesRoutes from "./ServiceRoutes";
import VeterinarianRoutes from "./VeterinarianRoutes";

const NotFound = lazy(() => import("../pages/notfound/NotFound"));

const AppRoutes = memo(() => (
  <Suspense fallback={<LoadingPage />}>
    <Routes>
      {/* Các route dành cho khách hàng */}
      <Route path="/" element={<CustomerRoutes />} />

      {/* Route cho dịch vụ */}
      <Route path="/services/*" element={<ServicesRoutes />} />

      {/* Đường dẫn cho Bác sĩ thú y */}
      <Route path="/veterinarian/*" element={<VeterinarianRoutes />} />

      {/* Các route dành cho Auth
      <Route path="/auth/*" element={<AuthLayout />}>
        <Route path="/*" element={<AuthRoutes />} />
      </Route> */}

      {/* Admin Routes */}
      <Route path="/admin/*" element={<AdminRoutes />} />

      {/* Route 404 */}
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
));

export default AppRoutes;
