const Sequelize = require('sequelize')
const manufacturersTemplate = require('./manufacturersTemplate')
const productsTemplate = require('./productsTemplate')

const connection = new Sequelize('candies', 'candies', 'C4nd13$!', { host: '173.230.134.130', dialect: 'mysql'})

const ManufacturersModel = manufacturersTemplate(connection, Sequelize)
const ProductsModel = productsTemplate(connection, Sequelize, ManufacturersModel)

ManufacturersModel.hasMany(ProductsModel)
ProductsModel.belongsTo(ManufacturersModel)

module.exports = { ManufacturersModel, ProductsModel }