const { getAllManufacturersWithProducts, getManufacturerByIdWithProducts } = require('../models/models')

const getAllManufacturersWithProductsController = async (request, response) => {
    try{const allManufacturers = await getAllManufacturersWithProducts()

    return response.send(allManufacturers)
    } catch(error){
        return response.sendStatus(500)
    }
}

const getManufacturerByIdWithProductsController = async (request, response) => {
    try{const { id } = request.params
    
    const foundManufacturer = await getManufacturerByIdWithProducts(id)

    return foundManufacturer ? response.send(foundManufacturer) : response.sendStatus(404)
} catch(error){
    return response.sendStatus(500)
}
}


module.exports = { getAllManufacturersWithProductsController, getManufacturerByIdWithProductsController }