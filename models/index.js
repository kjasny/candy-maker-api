const Sequelize = require('sequelize')
const manufacturersTemplate = require('./manufacturersTemplate')
const productsTemplate = require('./productsTemplate')
const configs = require('../configs/sequelize')

const environment = process.env.NODE_ENV || 'development'
const config = configs[environment]
const {
  database, username, password, host, dialect
} = config

const connection = new Sequelize(database, username, password, { host, dialect })

const ManufacturersModel = manufacturersTemplate(connection, Sequelize)
const ProductsModel = productsTemplate(connection, Sequelize, ManufacturersModel)

ManufacturersModel.hasMany(ProductsModel)
ProductsModel.belongsTo(ManufacturersModel)

module.exports = { ManufacturersModel, ProductsModel }
