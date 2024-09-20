import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Job from "./Pages/Job";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const App = () => {
  const [modal, setModal] = useState(true);
  return (
    <>
      


      <div className="relative  w-full">

          <Routes>
            <Route path="/" element={<Home setModal={setModal} modal={modal} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/job/:jobId" element={<Job />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        
      </div>
    </>
  );
};

export default App;
