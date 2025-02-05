import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeState } from "../../../../Context/UseContext";

function SearchBar({ setData }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const data = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setData(data);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  const {
    state: { theme },
  } = ThemeState();
  return (
    <div
      className={`${
        theme === "light" ? "bg-F3F4F6 border-gray-400 border" : "bg-2c2c2c"
      } w-full pl-8 flex items-center rounded-lg h-54px`}
    >
      <input
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search..."
        className={`h-full ${
          theme === "light" ? "bg-F3F4F6 text-black" : "bg-2c2c2c text-white"
        } text-sm focus:outline-none w-full h-54px`}
      />
      <button
        className="h-full bg-black p-1 rounded-r-lg"
        type="submit"
        value="Submit"
      >
        <SearchIcon
          className={`${
            theme === "light" ? " text-white" : "text-808080 bg-black"
          } text-30px h-inherit cursor-pointer w-full pl-1 pr-1 rounded-r-lg`}
        />
      </button>
    </div>
  );
}

export default SearchBar;
