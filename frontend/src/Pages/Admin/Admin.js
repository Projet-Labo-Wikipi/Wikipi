import React from "react";
import "./admin.css"; // Ensure this CSS file exists
import { Container } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

const Admin = () => {
  // Data for moderator validation
  const validationModerateurs = [
    { nom: "Marie Dupont", date: "22/11/2023" },
    { nom: "Pierre Martin", date: "22/11/2023" },
    { nom: "Thomas Dubois", date: "22/11/2023" },
  ];

  // Data for moderator management
  const gestionModerateurs = [
    { nom: "Julien Mercier" },
    { nom: "Nicolas Dupuis" },
    { nom: "Claire Laurent" },
  ];

  return (
    <Container className="admin-container">
      <div className="admin-content">
        {/* Validation Moderators Section */}
        <h1><strong>Validation modérateurs</strong></h1>
        <table className="admin-table">
          <thead>
            <tr>
              <th>NOM</th>
              <th>DATE DE SOUMISSION</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {validationModerateurs.map((mod, index) => (
              <tr key={index}>
                <td>{mod.nom}</td>
                <td>{mod.date}</td>
                <td>
                  <button className="icon-btn"><VisibilityIcon /></button>
                  <button className="icon-btn"><DeleteIcon /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Gestion des modérateurs Section */}
        <h1><strong>Gestion des modérateurs</strong></h1>
        <table className="admin-table">
          <thead>
            <tr>
              <th>NOM</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {gestionModerateurs.map((mod, index) => (
              <tr key={index}>
                <td>{mod.nom}</td>
                <td>
                  <button className="icon-btn"><DeleteIcon /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Admin;