import React from "react";
import Navbar from "./Components/Navbar";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Job from "./Pages/Job";

const App = () => {
  return (
    <>
      

      <div className="bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 z-20"></div>
      <div className="w-screen min-h-screen fixed z-0 flex justify-center px-6 py-40 pointer-events-none">
       
      </div>

      <div className="relative z-20">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/job/:jobId" element={<Job />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
