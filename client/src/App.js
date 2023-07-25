import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./screens/error/Error";

import CandyMaker from "./screens/candymaker/CandyMaker";
import ProductsList from "./screens/productsList/ProductsList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/manufacturers/:name" element={<ProductsList />} />
        <Route path="/" element={<CandyMaker />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
