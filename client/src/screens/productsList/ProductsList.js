import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProductsList = () => {

    const [manufacturer, setManufacturer] = useState({})
    const [products, setProducts] = useState([])
    const { name } = useParams()

    useEffect(() => {
        const fetchManufacturers = async () => {
          let fetch = await axios.get(`http://localhost:8080/manufacturers/${name}`);
    
          setManufacturer(fetch.data);
          setProducts(fetch.data.products);
        };
    
        fetchManufacturers();
      }, []);

      const renderProducts = products.map(product => {
        
        return (<div>
            {product.name} ({product.yearIntroduced})
        </div>)
      })
      return (
        <div>
            <h1>Candy Makers</h1>
            <h3>{manufacturer.name} ({manufacturer.country})</h3>
            <div>
                {renderProducts}
            </div>
            <Link to="/">Go Back</Link>
        </div>
      )
}

export default ProductsList