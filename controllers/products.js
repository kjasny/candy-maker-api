const { getAllProductsWithManufacturers, getProductByIdWithManufacturer } = require('../models/models')

const getAllProductsWithManufacturersController = async (request, response) => {
    try{const allProducts = await getAllProductsWithManufacturers()

    return response.send(allProducts)
    } catch(error){
        return response.sendStatus(500)
    }
}

const getProductByIdWithManufacturerController = async (request, response) => {
    try{const { id } = request.params
    
    const foundProduct = await getProductByIdWithManufacturer(id)

    return foundProduct ? response.send(foundProduct) : response.sendStatus(404)
} catch(error){
    return response.sendStatus(500)
}
}

module.exports = { getAllProductsWithManufacturersController, getProductByIdWithManufacturerController }