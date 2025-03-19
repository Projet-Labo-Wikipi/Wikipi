import React from "react";
import "./Demandes.css"; // Pour inclure les styles
import { ThemeState } from "../../Context/UseContext";
import {  Container, } from "@mui/material";
/*import Card from "@mui/material/Card";*/
/*import CardActions from "@mui/material/CardActions";*/
/*import CardContent from "@mui/material/CardContent";*/
/*import Button from "@mui/material/Button";*/
/*import Typography from "@mui/material/Typography";*/

const App = () => {
  // Données de la table
  const demandes = [
    { titre: "Présentation Wikipi", date: "22/11/2023", projet: "Wikipi", type: "Validation", statut: "Refusée" },
    { titre: "Présentation Wikipi", date: "22/11/2023", projet: "Wikipi", type: "Suppression", statut: "Validée" },
    { titre: "Présentation Wikipi", date: "22/11/2023", projet: "Wikipi", type: "Modification", statut: "En cours" },
    { titre: "Présentation Wikipi", date: "22/11/2023", projet: "Wikipi", type: "Modification", statut: "En cours" },
    { titre: "Présentation Wikipi", date: "22/11/2023", projet: "Wikipi", type: "Suppression", statut: "Validée" },
    { titre: "Présentation Wikipi", date: "22/11/2023", projet: "Wikipi", type: "Validation", statut: "Validée" },
  ];

  const{
    state: {theme},
  } = ThemeState();
  // Fonction pour obtenir les classes des badges
  const getTypeBadgeClass = (type) => {
    switch (type) {
      case "Validation":
        return "badge badge-validation";
      case "Suppression":
        return "badge badge-suppression";
      case "Modification":
        return "badge badge-modification";
      default:
        return "badge";
    }
  };

  return (
    <Container
      className={`${theme === "light" ? "bg-white" : "bg-252525"} mt-5 w-full`}
    >
    <div className="container">
      <h1><strong>Mes demandes</strong></h1>
      <table className="table">
        <thead>
          <tr>
            <th>TITRE</th>
            <th>DATE DE SOUMISSION</th>
            <th>PROJET</th>
            <th>TYPE DEMANDE</th>
            <th>STATUT</th>
          </tr>
        </thead>
        <tbody>
          {demandes.map((demande, index) => (
            <tr key={index}>
              <td>{demande.titre}</td>
              <td>{demande.date}</td>
              <td>{demande.projet}</td>
              <td>
                <span className={getTypeBadgeClass(demande.type)}>{demande.type}</span>
              </td>
              <td>{demande.statut}</td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </Container>
  );
};

export default App;