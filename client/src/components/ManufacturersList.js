import React from "react";
import { Link } from 'react-router-dom'

const ManufacturersList = (props) => {
    const { manufacturers } = props;

    const renderManufacturers = manufacturers.map((manufacturer) => {
        return (

          <div><Link to={`/manufacturers/${manufacturer.name}`}> {manufacturer.name} ({manufacturer.country}) </Link> </div>
        )
    })

    return (
        <div>{renderManufacturers}</div>
    )
}

export default ManufacturersList;