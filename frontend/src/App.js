import "./App.css";
import Header from "./Components/Header/Header.js";
import { Routes, Route } from "react-router-dom";
import Project from "./Pages/Home/Project.js";
import SideNavigation from "./Components/SideNavigation/SideNavigation.js";
import ValidationDocumentation from "./Pages/Validation_documentation/ValidationDocumentation.js";
import ValidationDocumentationModo from "./Modo/Validation_documentation/ValidationDocumentation.js";
import Moderateurs from "./Admin/Moderateurs/Moderateurs.js";

function App() {
  return (
    <div className="">
      <Header />
      <div className="flex justify-start items-start">
        <SideNavigation />
        <Routes>
          <Route path="/" element={<Project />} /> {/* 👈 Renders at /app/ */}
          <Route path="/validation" element={<ValidationDocumentation />} />
          <Route
            path="/validation-modo"
            element={<ValidationDocumentationModo />}
          />
          <Route path="/admin-moderateur" element={<Moderateurs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
