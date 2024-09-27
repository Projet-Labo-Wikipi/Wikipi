import React from "react";
import { ThemeState } from "../../../../Context/UseContext";
import { useNavigate } from "react-router-dom";

function SearchDataList({ data }) {
  const {
    state: { theme },
  } = ThemeState();
  const navigation = useNavigate();
  return (
    <div
      className={`${
        theme === "light" ? "bg-d1d1d1 text-black" : "bg-252525 text-white"
      } w-full  flex flex-col overflow-y-auto max-h-96 absolute top-12 z-10`}
    >
      {data?.map((item, key) => (
        <div
          className="p-lr-10px_tb-20px hover:bg-efefef cursor-pointer hover:text-252525"
          key={key}
          onClick={(e) =>
            /*alert(`Vous avez cliqué sur ${item.name}`)*/
            navigation(`${item.name}`)
          }
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default SearchDataList;
