import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/auth/login/Login";
import Register from "../components/auth/register/Register";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
export default AuthRoutes;
