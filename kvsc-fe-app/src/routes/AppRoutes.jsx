import { Dashboard } from "@mui/icons-material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AppointmentManagement from "../components/admin/appointmentManagement/AppointmentManagement";
import Chat from "../components/admin/chat/Chat";
import ContentManagement from "../components/admin/contentManagement/ContentManagement";
import ReportManagement from "../components/admin/reports/ReportManagement";
import UserManagement from "../components/admin/userManagement/UserManagement";
import Welcome from "../components/admin/welcome/Welcome";
import CustomerLayout from "../components/layout/CustomerLayout";
import About from "../pages/about/About";
import AdminLayout from "../pages/admin/AdminLayout";
import Appointment from "../pages/appointment/Appointment";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Homepage";
import NotFound from "../pages/notfound/NotFound";
import Services from "../pages/services/Services";
import Veterian from "../pages/veterian/Veterian";
import Veterinarian from "../pages/veterinarian/Veterinarian";

const AppRoutes = () => (
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
      <Route path="dashboard" element={<Dashboard />} />
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
);

export default AppRoutes;
