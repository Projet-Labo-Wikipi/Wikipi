import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeState } from "../../../Context/UseContext";

function BurgerMenu() {
  const {
    state: { theme },
  } = ThemeState();
  return (
    <div id="BurgerMenu">
      <MenuIcon
        className={`${
          theme === "light" ? "text-black" : "text-white"
        } text-3rem cursor-pointer `}
      />
    </div>
  );
}

export default BurgerMenu;
