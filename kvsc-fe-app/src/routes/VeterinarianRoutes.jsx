import React, { lazy } from "react";
import { Route } from "react-router-dom";

const Veterinarian = lazy(() => import("../pages/veterinarian/Veterinarian"));

const VeterinarianRoutes = (
  <Route path="/veterinarian/*" element={<Veterinarian />} />
);

export default VeterinarianRoutes;
