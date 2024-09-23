import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";

const App = () => {

  return (
    <>
      


      <div className="relative  w-full">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        
      </div>
    </>
  );
};

export default App;
