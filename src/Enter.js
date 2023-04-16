import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import App from "./App";
import "./App.css";
import Home from "./Home";
const Enter = () => {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/app" element={<App/>}></Route>
      </Routes>
    </div>
  );
};

export default Enter;
