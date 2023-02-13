import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Api } from "../services/api";

export const AppRoutes = () => {
  const registerUser = async (formData) => {
    try {
      const response = await Api.post("/users", formData);
      console.log(response.data);
      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/register"
        element={<Register registerUser={registerUser} />}
      />
    </Routes>
  );
};
