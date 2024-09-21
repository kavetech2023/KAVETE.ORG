import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Job from "./Pages/Job";
import SignUp from "./Pages/SignUp";

const App = () => {
  
  return (
    <>
      


      <div className="relative  w-full">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/job/:jobId" element={<Job />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        
      </div>
    </>
  );
};

export default App;
