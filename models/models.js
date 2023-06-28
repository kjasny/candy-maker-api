const models = require('.')

const getAllManufacturersWithProducts = async () => {
    try{const allManufacturers = await models.ManufacturersModel.findAll({ include: { model: models.ProductsModel }})

    return allManufacturers
} catch(error){
    console.log(error)
}
}

const getManufacturerByIdWithProducts = async (id) => {
    try{const foundManufacturer = await models.ManufacturersModel.findOne({ where: { id }, 
        include: [{ model: models.ProductsModel }]})

    return foundManufacturer
    } catch(error){
        console.log(error)
    }
}

const getAllProductsWithManufacturers = async () => {
    try{const allProducts = await models.ProductsModel.findAll({ include: { model: models.ManufacturersModel }})

    return allProducts
} catch(error){
    console.log(error)
}
}

const getProductByIdWithManufacturer = async (id) => {
    try{const foundProduct = await models.ProductsModel.findOne({ where: { id }, 
        include: [{ model: models.ManufacturersModel }]})

    return foundProduct
    } catch(error){
        console.log(error)
    }
}

module.exports = { getAllManufacturersWithProducts, getManufacturerByIdWithProducts, getAllProductsWithManufacturers, getProductByIdWithManufacturer }