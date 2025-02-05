import React from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Navigation from "./Navigation/Navigation";
import "../../media.css";
import { ThemeState } from "../../Context/UseContext";

function Header() {
  const {
    state: { theme },
  } = ThemeState();
  return (
    <div className={`${theme === "light" ? "bg-white" : "bg-252525"}`}>
      <nav className=" border-b-FFEDED border-b-2 mr-2 ml-2">
        <Navigation />
        <BurgerMenu id="BurgerMenu" />
      </nav>
    </div>
  );
}

export default Header;
