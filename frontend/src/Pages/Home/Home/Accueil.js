import React from "react";
import { ThemeState } from "../../Context/UseContext";
import { Avatar, Container, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Accueil() {
  const {
    state: { theme },
  } = ThemeState();

  let items = [
    {
      nom_projet: "Nom Projet",
      text_head: "Lorem ipsum",
      text:
        "Lorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ",
      user_logo: {},
      user_nom: "Pierron",
      user_prenom: "Astrid",
      creation_time: "06/03/2024",
    },
    {
      nom_projet: "Nom Projet",
      text_head: "Lorem ipsum",
      text:
        "Lorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ",
      user_logo: {},
      user_nom: "Pierron",
      user_prenom: "Astrid",
      creation_time: "06/03/2024",
    },
    {
      nom_projet: "Nom Projet",
      text_head: "Lorem ipsum",
      text:
        "Lorem ipsum dolor sit amet orem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ",
      user_logo: "",
      user_nom: "Pierron",
      user_prenom: "Astrid",
      creation_time: "06/03/2024",
    },
  ];
  return (
    <Container
      className={`${theme === "light" ? "bg-white" : "bg-252525"} mt-5 w-full`}
    >
      <div className="p-2 rounded-lg border-1 border-black">
        <div className="w-full pt-14 pb-14 bg-662626 rounded-lg flex justify-around items-center">
          <div className="text-white">
            <p>La base documentaire pour le Projet Labo</p>
            <h1 className="text-3xl">WikIpi</h1>
          </div>
          <div className="flex justify-around items-center gap-5">
            <button className="pt-2 pb-2 pl-5 pr-5 rounded-lg bg-white text-red-600">
              Creer un nouveau projet
            </button>
            <button className="pt-2 pb-2 pl-5 pr-5 rounded-lg bg-black text-white">
              Devenir Moderateur
            </button>
          </div>
        </div>
        <div>
          <h1 className="mt-5 mb-5 ml-1 font-bold text-xl">Actualites</h1>
          <div className="mb-5 flex justify-around items-center gap-5 flex-wrap">
            {items.map((i, index) => (
              <Card
                style={{
                  boxShadow: "0px 5px 10px 0px #000",
                }}
                sx={{ maxWidth: 350 }}
                key={index}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    gutterBottom
                    className="bg-slate-100 font-bold text-black w-fit pt-1 pb-1 pl-5 pr-5 rounded-xl"
                  >
                    {i.nom_projet}
                  </Typography>
                  <Typography
                    style={{ marginTop: "1.25rem" }}
                    variant="h5"
                    component="div"
                  >
                    {i.text_head}
                  </Typography>
                  <Typography variant="p">{i.text}</Typography>
                  <div className="mt-5 w-1/2 flex justify-between items-start">
                    <Stack direction="row" spacing={2}>
                      <Avatar
                        alt={`${i.user_nom}${i.user_prenom}`}
                        src="/static/images/avatar/1.jpg"
                      />
                    </Stack>
                    <div className="flex flex-col justify-around items-start">
                      <Typography variant="p">
                        {i.user_prenom} {i.user_nom}
                      </Typography>
                      <Typography variant="p">{i.creation_time}</Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Accueil;
