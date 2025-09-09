import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Start from "../pages/Start";
import CaptainLogin from "../pages/CaptainLogin";
import UserLogin from "../pages/UserLogin";
import UserSignUp from "../pages/UserSignUp";
import CaptainSignUp from "../pages/CaptainSignUp";
import Home from "../pages/Home";
import UserProtectWrapper from "../pages/UserProtectWrapper";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/signup" element={<UserSignUp />} />
      <Route path="/captain-signup" element={<CaptainSignUp />} />
      <Route
        path="/home"
        element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        }
      />
    </Routes>
  );
};

export default App;
