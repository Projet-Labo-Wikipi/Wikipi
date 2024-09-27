import React from "react";
import { NavLink } from "react-router-dom";
import logoIPI from "../../../images/Logo_wikiPi_panda.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import Search from "../Search/Search";
import User from "../User/User";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { ThemeState } from "../../../Context/UseContext";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material";

function Navigation() {
  const {
    state: { theme },
    dispatch,
  } = ThemeState();

  const toggleTheme = () => {
    const action = { type: "TOGGLE_THEME" };
    dispatch(action);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -8,
      top: -8,
      border: `2px solid ${theme.palette.background.paper}`,
      borderRadius: "50%",
      padding: "4px 4px",
    },
  }));
  return (
    <div id="Navigation">
      <ul className="flex items-center justify-between">
        <li className="w-10%">
          <NavLink to="/">
            <img className="w-40" src={logoIPI} alt="Error" />
          </NavLink>
        </li>
        <li className="flex justify-end items-center gap-10 w-1/5">
          {/* <div className="rounded-full p-2 bg-7e7e7e">
            <button onClick={toggleTheme}>
              {theme === "light" ? (
                <NightsStayIcon className="text-2rem text-black cursor-pointer" />
              ) : (
                <LightModeIcon className="text-2rem text-white cursor-pointer" />
              )}
            </button>
          </div> */}
          <div className="flex justify-end w-auto gap-5 items-center">
            <div className="flex justify-around w-auto gap-5 items-center">
              <div className="flex justify-around items-center gap-10">
                <div className="flex justify-around items-center gap-4">
                  <div className="flex justify-center items-center bg-gray-50 border rounded-md p-2 border-spacing-1 border-gray-200">
                    <StyledBadge variant="dot" color="error">
                      <NotificationsOutlinedIcon />
                    </StyledBadge>
                  </div>
                  <div className="flex justify-center items-center bg-gray-100 border rounded-md p-2 border-spacing-1 border-gray-200">
                    <MapsUgcOutlinedIcon />
                  </div>
                </div>
                <div>
                  <p
                    className={`${
                      theme === "light" ? "text-black" : "text-white"
                    } text-nowrap`}
                  >
                    Nom Prénom
                  </p>
                  <p
                    style={{ fontSize: "10px" }}
                    className={`${
                      theme === "light" ? "text-797777" : "text-white"
                    } text-nowrap`}
                  >
                    Professionnel
                  </p>
                </div>
              </div>
            </div>
            <User />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
