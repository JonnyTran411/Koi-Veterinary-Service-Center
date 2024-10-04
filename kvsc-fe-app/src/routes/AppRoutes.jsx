import React, { lazy, memo, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CustomerLayout from "../components/layout/CustomerLayout";
import AdminLayout from "../pages/admin/AdminLayout";
import LoadingPage from "../pages/loading/LoadingPage";

const AppointmentManagement = lazy(() =>
  import("../components/admin/appointmentManagement/AppointmentManagement")
);
const Chat = lazy(() => import("../components/admin/chat/Chat"));
const ContentManagement = lazy(() =>
  import("../components/admin/contentManagement/ContentManagement")
);
const ReportManagement = lazy(() =>
  import("../components/admin/reports/ReportManagement")
);
const UserManagement = lazy(() =>
  import("../components/admin/userManagement/UserManagement")
);
const Welcome = lazy(() => import("../components/admin/welcome/Welcome"));
const About = lazy(() => import("../pages/about/About"));
const Appointment = lazy(() => import("../pages/appointment/Appointment"));
const Login = lazy(() => import("../pages/auth/login/Login"));
const Register = lazy(() => import("../pages/auth/register/Register"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Home = lazy(() => import("../pages/home/Homepage"));
const NotFound = lazy(() => import("../pages/notfound/NotFound"));
const Services = lazy(() => import("../pages/services/Services"));
const Veterian = lazy(() => import("../pages/veterian/Veterian"));
const Veterinarian = lazy(() => import("../pages/veterinarian/Veterinarian"));

const AppRoutes = memo(() => (
  <Suspense fallback={<LoadingPage />}>
    <Routes>
      {/* Các route dành cho khách hàng */}
      <Route element={<CustomerLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/veterian" element={<Veterian />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Các route dành cho Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Welcome />} />
        <Route path="dashboard" element={<Welcome />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="chat" element={<Chat />} />
        <Route path="appointments" element={<AppointmentManagement />} />
        <Route path="reports" element={<ReportManagement />} />
        <Route path="content" element={<ContentManagement />} />
      </Route>

      {/* Các route dành cho Veterinarian */}
      <Route path="/veterinarian/*" element={<Veterinarian />} />

      {/* Route 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
));

export default AppRoutes;
