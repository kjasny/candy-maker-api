const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const {
  getAllManufacturersWithProductsController,
  getManufacturerByNameController,
} = require("./controllers/manufacturers");
const {
  getAllProductsWithManufacturersController,
  getProductByNameController,
} = require("./controllers/products");

app.use(cors());
//To support react, enable static files
app.use(express.static("client/build"));

app.get("/manufacturers", getAllManufacturersWithProductsController);

app.get("/manufacturers/:name", getManufacturerByNameController);

app.get("/products", getAllProductsWithManufacturersController);

app.get("/products/:name", getProductByNameController);

// to support react, we send all requests that do not match our API routes to the index.html of our react site
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(8080, () => {
  console.log("listening on http://localhost:8080");
});
