import { Container } from "@mui/material";
import React from "react";
import Logo_ipi from "../../images/Logo_wikiPi_panda.png";
import connexionPanda from "../../images/connexion.png";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

function Connexion({ setConnexion }) {
  const navigation = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    setConnexion(true);
    navigation("/");
  };
  return (
    <div className="min-h-90vh w-full flex justify-center items-center">
      <Container>
        <div className="flex justify-around items-start gap-10">
          <div className="w-1/2">
            <img className="w-full" src={Logo_ipi} alt="Logo_ipi" />
            <h1 className="mt-10 mb-10 text-2xl font-bold">Connexion</h1>
            <div className="w-full">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { mt: 1, mb: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  style={{
                    marginLeft: "0px !important",
                    marginRight: "0px !important",
                  }}
                  id="outlined-basic"
                  label="Email"
                  type="email"
                  variant="outlined"
                  className="w-full"
                />
                <h2 style={{ marginBottom: "1.25rem", marginTop: "0.25rem" }}>
                  Address email du campus
                </h2>
                <FormControl
                  sx={{ mt: 1, mb: 1, width: "100%" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Mot de passe
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <h2 style={{ marginBottom: "1.25rem", marginTop: "0.25rem" }}>
                  Mot de passe
                </h2>
                <button
                  onClick={handleClick}
                  className="pt-3 pb-3 text-xl rounded-lg bg-E03636 text-white"
                >
                  Connexion
                </button>
              </Box>
            </div>
          </div>
          <div>
            <img src={connexionPanda} alt="Error" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Connexion;
