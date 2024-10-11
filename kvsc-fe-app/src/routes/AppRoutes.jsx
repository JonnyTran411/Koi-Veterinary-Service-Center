import React, { lazy, memo, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import CustomerLayout from "../components/layout/CustomerLayout";
import LoadingPage from "../pages/loading/LoadingPage";
import AuthRoutes from "./AuthRoutes";
import CustomerRoutes from "./CustomerRoutes";

const NotFound = lazy(() => import("../pages/notfound/NotFound"));

const AppRoutes = memo(() => (
  <Suspense fallback={<LoadingPage />}>
    <Routes>
      {/* Các route dành cho khách hàng */}
      <Route element={<CustomerLayout />}>{CustomerRoutes}</Route>

      {/* Các route dành cho Auth */}
      <Route path="/auth/*" element={<AuthLayout />}>
        {AuthRoutes}
      </Route>

      {/* Các route dành cho Admin
      <Route path="/admin" element={<AdminLayout />}>
        {ManagerRoutes}
      </Route> */}

      {/* Các route dành cho Veterinarian
      {VeterinarianRoutes} */}

      {/* Route 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
));

export default AppRoutes;
