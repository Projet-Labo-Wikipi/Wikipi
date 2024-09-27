import "./App.css";
import Header from "./Components/Header/Header.js";
import { Routes, Route } from "react-router-dom";
import Project from "./Pages/Home/Project.js";
import SideNavigation from "./Components/SideNavigation/SideNavigation.js";

function App() {
  return (
    <div className="">
      <Header />
      <div className="flex justify-start items-start">
        <SideNavigation />
        <Routes>
          <Route path="/" element={<Project />} /> {/* 👈 Renders at /app/ */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
