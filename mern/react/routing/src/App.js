import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import Number from "./Components/Number";
import Hello from "./Components/Hello";

const App = () => {
  return (
    <div className="App bg-light p-3 text-center">
      <h1></h1>

      {/* Create the Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/4" element ={<Number />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </div>
  );
};

export default App;