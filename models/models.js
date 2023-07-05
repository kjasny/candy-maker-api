const models = require('.')
const Sequelize = require('sequelize')

const getAllManufacturersWithProducts = async () => {
  try { const allManufacturers = await models.ManufacturersModel.findAll({ include: { model: models.ProductsModel } })

    return allManufacturers
  } catch (error) {
    console.log(error)
  }
}

const getManufacturerByNameWithProducts = async (name) => {
  try { const foundManufacturer = await models.ManufacturersModel.findOne({
    where: { name: { [Sequelize.Op.like]: `%${name}%` } },
    attributes: ['id', 'name', 'country'],
    include: [{
      model: models.ProductsModel,
      attributes: ['id', 'name', 'yearIntroduced']
    }]
  })

  return foundManufacturer
  } catch (error) {
    console.log(error)
  }
}

const getAllProductsWithManufacturers = async () => {
  try { const allProducts = await models.ProductsModel.findAll({ include: { model: models.ManufacturersModel } })

    return allProducts
  } catch (error) {
    console.log(error)
  }
}

const getProductByNameWithManufacturer = async (name) => {
  try { const foundProduct = await models.ProductsModel.findOne({
    where: { name: { [Sequelize.Op.like]: `%${name}%` } },
    attributes: ['id', 'name', 'yearIntroduced'],
    include: [{
      model: models.ManufacturersModel,
      attributes: ['id', 'name', 'country']
    }]
  })

  return foundProduct
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getAllManufacturersWithProducts, getManufacturerByNameWithProducts, getAllProductsWithManufacturers, getProductByNameWithManufacturer }
