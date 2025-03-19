import React from "react";
import "./modo.css"; // Ensure styles match the UI
import { ThemeState } from "../../Context/UseContext";
import { Container } from "@mui/material";

const ModoPage = () => {
  const demandes = [
    { titre: "Présentation Wikipi", auteur: "Astrid Pierron", date: "22/11/2023", projet: "Wikipi", type: "Validation" },
    { titre: "Présentation Wikipi", auteur: "Astrid Pierron", date: "22/11/2023", projet: "Wikipi", type: "Suppression" },
    { titre: "Présentation Wikipi", auteur: "Astrid Pierron", date: "22/11/2023", projet: "Wikipi", type: "Modification" },
    { titre: "Présentation Wikipi", auteur: "Astrid Pierron", date: "22/11/2023", projet: "Wikipi", type: "Modification" },
    { titre: "Présentation Wikipi", auteur: "Astrid Pierron", date: "22/11/2023", projet: "Wikipi", type: "Suppression" },
    { titre: "Présentation Wikipi", auteur: "Astrid Pierron", date: "22/11/2023", projet: "Wikipi", type: "Validation" },
  ];

  // Ensure correct usage of ThemeState()
  const { state } = ThemeState();
  const theme = state?.theme || "light"; // Fallback to avoid errors

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
    <Container className={`${theme === "light" ? "bg-white" : "bg-252525"} mt-5 w-full`}>
      <div className="container">
        <h1><strong>Moderation Panel</strong></h1>
        <table className="table">
          <thead>
            <tr>
              <th>TITRE</th>
              <th>AUTEUR</th>
              <th>DATE DE SOUMISSION</th>
              <th>PROJET</th>
              <th>TYPE DEMANDE</th>
            </tr>
          </thead>
          <tbody>
            {demandes.map((demande, index) => (
              <tr key={index}>
                <td>{demande.titre}</td>
                <td>{demande.auteur}</td>
                <td>{demande.date}</td>
                <td>{demande.projet}</td>
                <td><span className={getTypeBadgeClass(demande.type)}>{demande.type}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default ModoPage;
