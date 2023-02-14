import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Api } from "../services/api";
import { toast } from "react-toastify";

export const AppRoutes = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const registerUser = async (formData) => {
    try {
      const response = await Api.post("/users", formData);
      console.log(response.data);
      navigate("/");
      toast.success("Conta criada com sucesso!");
    } catch (error) {
      console.log(error.response.data.message);
      toast.error("Ops! Algo deu errado");
    }
  };

  const loginUser = async (formData) => {
    try {
      const response = await Api.post("/sessions", formData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.token);
      navigate("/dashboard");
      toast.success("Login feito com sucesso!");
    } catch (error) {
      toast.error("Email ou senha inválidos");
      console.log(error.response.data.message);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Login loginUser={loginUser} />} />
      <Route path="/dashboard" element={<Dashboard user={user} />} />
      <Route
        path="/register"
        element={<Register registerUser={registerUser} />}
      />
    </Routes>
  );
};
