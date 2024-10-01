import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Appointment from "../pages/appointment/Appointment";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Homepage";
import NotFound from "../pages/notfound/NotFound";
import Services from "../pages/services/Services";
import Veterian from "../pages/veterian/Veterian";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/appointments" element={<Appointment />} />
    <Route path="/veterian" element={<Veterian />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
