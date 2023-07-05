const express = require('express')
const app = express()

const { getAllManufacturersWithProductsController, getManufacturerByNameController } = require('./controllers/manufacturers')
const { getAllProductsWithManufacturersController, getProductByNameController } = require('./controllers/products')

app.get('/manufacturers', getAllManufacturersWithProductsController)

app.get('/manufacturers/:name', getManufacturerByNameController)

app.get('/products', getAllProductsWithManufacturersController)

app.get('/products/:name', getProductByNameController)




app.listen(8080, () => {
  console.log('listening on http://localhost:8080')
})
