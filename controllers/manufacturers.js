const { getAllManufacturersWithProducts, getManufacturerByNameWithProducts } = require('../models/models')

const getAllManufacturersWithProductsController = async (request, response) => {
  try { const allManufacturers = await getAllManufacturersWithProducts()

    return response.send(allManufacturers)
  } catch (error) {
    return response.sendStatus(500)
  }
}

const getManufacturerByNameController = async (request, response) => {
  try { const { name } = request.params

    const foundManufacturer = await getManufacturerByNameWithProducts(name)

    return foundManufacturer ? response.send(foundManufacturer) : response.sendStatus(404)
  } catch (error) {
    return response.sendStatus(500)
  }
}


module.exports = { getAllManufacturersWithProductsController, getManufacturerByNameController }
