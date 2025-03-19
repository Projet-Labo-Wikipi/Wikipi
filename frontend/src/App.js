import "./App.css";
import Header from "./Components/Header/Header.js";
import { Routes, Route } from "react-router-dom";
import Project from "./Pages/Home/Project.js";
import SideNavigation from "./Components/SideNavigation/SideNavigation.js";
import Connexion from "./Pages/Login/Connexion.js";
import Demandes from "./Pages/Demandes/Demandes.js";
import Admin from "./Pages/Admin/Admin.js"; // ✅ Import Admin
import ModoPage from "./Pages/modo/modo.js";

function App() {
  return (
    <div className="">
      <Header />
      <div className="flex justify-start items-start">
        <SideNavigation />
        <Routes>
          <Route path="/" element={<Project />} /> {/* 👈 Home page */}
          <Route path="/login" element={<Connexion />} />
          <Route path="/demandes" element={<Demandes />} />
          <Route path="/admin" element={<Admin />} /> {/* ✅ Admin Page */}
          <Route path="/modo" element={<ModoPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;