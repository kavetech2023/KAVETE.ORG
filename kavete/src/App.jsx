import React from "react";
import Navbar from "./Components/Navbar";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      

      <div className="bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 z-20"></div>
      <div className="w-screen min-h-screen fixed z-0 flex justify-center px-6 py-40 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-25"></div>
        <img
          src="/mesh.svg"
          className="opacity-15 absolute bottom-1 h-[600px] z-10"
          alt=""
        />
      </div>

      <div className="relative z-20">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
