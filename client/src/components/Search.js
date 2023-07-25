import React, { useEffect } from "react";

const Search = (props) => {
  const { search, setSearch } = props;

  return (
    <input
      type="text"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    ></input>
  );
};

export default Search
