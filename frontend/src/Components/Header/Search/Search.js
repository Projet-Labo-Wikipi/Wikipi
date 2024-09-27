import React, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import SearchDataList from "./SearchDataList/SearchDataList";

function Search() {
  const [data, setData] = useState([]);
  return (
    <div className="mt-5">
      <form className="rounded-xl w-full flex flex-col items-center min-w-10 relative">
        <SearchBar setData={setData} />
        <SearchDataList data={data} />
      </form>
    </div>
  );
}

export default Search;
