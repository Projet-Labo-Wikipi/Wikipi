import React, { createContext, useContext, useEffect, useReducer } from "react";
import ThemeReducer from "./UseReducer";

const Cart = createContext();
const ThemeContext = createContext();

function Context({ children }) {
  const localTheme = () => {
    var localTheme = localStorage.getItem("mode");
    localTheme === null
      ? localStorage.setItem("mode", JSON.stringify("light"))
      : JSON.parse(localTheme);

    return localTheme ? JSON.parse(localTheme) : "light";
  };

  const [state, dispatch] = useReducer(ThemeReducer, {
    theme: localTheme(),
  });

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(state.theme));
  }, [state]);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export default Context;

export const ThemeState = () => {
  return useContext(Cart, ThemeContext);
};
