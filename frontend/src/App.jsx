import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CaptainLogin from "../pages/CaptainLogin";
import UserLogin from "../pages/UserLogin";
import UserSignUp from "../pages/UserSignUp";
import CaptainSignUp from "../pages/CaptainSignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/signup" element={<UserSignUp />} />
      <Route path="/captain-signup" element={<CaptainSignUp />} />
    </Routes>
  );
};

export default App;
