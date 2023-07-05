const { getAllProductsWithManufacturers, getProductByNameWithManufacturer } = require('../models/models')

const getAllProductsWithManufacturersController = async (request, response) => {
  try { const allProducts = await getAllProductsWithManufacturers()

    return response.send(allProducts)
  } catch (error) {
    return response.sendStatus(500)
  }
}

const getProductByNameController = async (request, response) => {
  try { const { name } = request.params

    const foundProduct = await getProductByNameWithManufacturer(name)

    return foundProduct ? response.send(foundProduct) : response.sendStatus(404)
  } catch (error) {
    return response.sendStatus(500)
  }
}

module.exports = { getAllProductsWithManufacturersController, getProductByNameController }
