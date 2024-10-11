import React, { lazy } from "react";
import { Route } from "react-router-dom";

const Homepage = lazy(() => import("../pages/home/Homepage"));
const About = lazy(() => import("../pages/about/About"));
const Appointment = lazy(() => import("../pages/appointment/Appointment"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Services = lazy(() => import("../pages/services/Services"));
const Veterian = lazy(() => import("../pages/veterian/Veterian"));

const CustomerRoutes = (
  <>
    <Route path="/" element={<Homepage />} />
    <Route path="about" element={<About />} />
    <Route path="services" element={<Services />} />
    <Route path="appointments" element={<Appointment />} />
    <Route path="veterian" element={<Veterian />} />
    <Route path="contact" element={<Contact />} />
  </>
);

export default CustomerRoutes;
