import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import Stats from "./Pages/Stats";

const App = () => {

  return (
    <>
      


      <div className="relative  w-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="stats" element={<Stats />} />
          </Routes>
        
      </div>
    </>
  );
};

export default App;
