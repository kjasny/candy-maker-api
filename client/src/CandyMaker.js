import "./App.css";
import React, { useState, useEffect } from "react";

function CandyMaker() {
const [search, setSearch] = useState("")

  return (
    <div className="CandyMaker">
      <h1 className="title">Candy Makers</h1>
      <input type="text" value={search} onChange={(event) => setSearch(event.target.value)}></input>
      <div className="search">{search}</div>
    </div>
  );
}

export default CandyMaker;
