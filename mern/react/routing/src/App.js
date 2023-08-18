import React from "react";
import {Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import Number from "./Components/Number";
import Hello from "./Components/Hello";
import Hola from "./Components/Hola.js";

const App = () => {
  return (
    <div className="App bg-light p-3 text-center">

{/* Create the Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/4" element ={<Number />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/hola/azul/rojo" element={<Hola />} />
      </Routes>
    </div>
  );
};

export default App;