import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../components/auth/register/Register";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
export default AuthRoutes;
