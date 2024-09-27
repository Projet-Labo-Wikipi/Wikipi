import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ThemeState } from "../../../Context/UseContext";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Badge, styled } from "@mui/material";

function User() {
  const [userMenu, setUserMenu] = useState(false);
  const [arrow, setArrow] = useState(false);
  const {
    state: { theme },
  } = ThemeState();

  const handleClick = (value) => {
    setUserMenu(value);
    setArrow(value);
  };

  let menu = [
    "Mes Articles",
    "Mes Favoris",
    "Validation des Articles",
    "Articles en Attente",
    "Déconnexion",
  ];

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 10,
      top: 10,
      border: `2px solid ${theme.palette.background.paper}`,
      borderRadius: "50%",
      padding: "6px 6px",
    },
  }));

  return (
    <div className="relative">
      <button
        value={userMenu}
        onClick={() => handleClick(!userMenu)}
        className="flex justify-around items-center gap-1 cursor-pointer"
      >
        <StyledBadge badgeContent={4} variant="dot" color="success">
          <AccountCircleIcon
            className={`${
              theme === "light" ? "text-black" : "text-4E4E4E"
            } text-3.5rem cursor-pointer rounded-md`}
          />
        </StyledBadge>

        {arrow ? (
          <KeyboardArrowDownOutlinedIcon value={arrow} />
        ) : (
          <KeyboardArrowUpOutlinedIcon value={arrow} />
        )}
      </button>
      {userMenu ? (
        <div
          className={`${
            theme === "light" ? "bg-C8C8C8" : "bg-464646"
          } w-60 right-0 top-20 rounded-26px pt-2 pb-2 flex flex-col gap-1 text-white absolute`}
        >
          {menu.map((item, key) => (
            <h3
              key={key}
              onClick={() => handleClick(!userMenu)}
              className={`${
                theme === "light" ? "text-black" : "text-white"
              } p-3 mt-3 cursor-pointer hover:bg-7e7e7e hover:text-white rounded-26px`}
            >
              {item}
            </h3>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default User;
