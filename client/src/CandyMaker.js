import "./App.css";
import React, { useState, useEffect } from "react";
import axios from 'axios'

function CandyMaker() {
const [search, setSearch] = useState("")
const [manufacturers, setManufacturers] = useState([])
const [filteredManufacturers, setFilteredManufacturers] = useState([])

useEffect(() => {
  const fetchManufacturers = async () => {
    let fetch = await axios.get('http://localhost:8080/manufacturers')

    setManufacturers(fetch.data)
    setFilteredManufacturers(fetch.data)
  }

  fetchManufacturers()
}, [])

useEffect(() => {
  setFilteredManufacturers(manufacturers.filter(manufacturer => {
    if(manufacturer.name.toLowerCase().includes(search.toLowerCase())){
      return true
    } else {
      return false
    }
  }))
}, [search])

const renderManufacturers = filteredManufacturers.map((manufacturer) => {
    return (
      <div>{manufacturer.name} ({manufacturer.country})</div>
    )
})

  return (
    <div className="CandyMaker">
      <h1 className="title">Candy Makers</h1>
      <input type="text" value={search} onChange={(event) => setSearch(event.target.value)}></input>
      <div className="search">{renderManufacturers}</div>
    </div>
  );
}

export default CandyMaker;
