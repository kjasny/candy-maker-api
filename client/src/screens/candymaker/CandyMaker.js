import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../../components/Search/Search";
import ManufacturersList from "../../components/ManufacturersList/ManufacturersList";

function CandyMaker() {
  const [search, setSearch] = useState("");
  const [manufacturers, setManufacturers] = useState([]);
  const [filteredManufacturers, setFilteredManufacturers] = useState([]);

  useEffect(() => {
    const fetchManufacturers = async () => {
      let fetch = await axios.get("http://localhost:8080/manufacturers");

      setManufacturers(fetch.data);
      setFilteredManufacturers(fetch.data);
    };

    fetchManufacturers();
  }, []);

  useEffect(() => {
    setFilteredManufacturers(
      manufacturers.filter((manufacturer) => {
        if (manufacturer.name.toLowerCase().includes(search.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      })
    );
  }, [search]);

  return (
    <div className="CandyMaker">
      <h1 className="title">Candy Makers</h1>
      <Search setSearch={setSearch} search={search} />

      <ManufacturersList manufacturers={filteredManufacturers} />
    </div>
  );
}

export default CandyMaker;
