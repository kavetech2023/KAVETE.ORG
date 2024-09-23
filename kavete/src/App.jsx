import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";

const App = () => {

  return (
    <>
      


      <div className="relative  w-full">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        
      </div>
    </>
  );
};

export default App;
