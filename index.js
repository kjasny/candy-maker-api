const express = require('express')
const app = express()

const { getAllManufacturersWithProductsController, getManufacturerByIdWithProductsController } = require('./controllers/manufacturers')
const { getAllProductsWithManufacturersController, getProductByIdWithManufacturerController } = require('./controllers/products')

app.get('/manufacturers', getAllManufacturersWithProductsController)

app.get('/manufacturers/:id', getManufacturerByIdWithProductsController)

app.get('/products', getAllProductsWithManufacturersController)

app.get('/products/:id', getProductByIdWithManufacturerController)




app.listen(8080, () => {
    console.log('listening on http://localhost:8080')
})