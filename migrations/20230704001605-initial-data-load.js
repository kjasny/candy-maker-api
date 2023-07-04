'use strict';

const manufacturersData = require("../manufacturersData")
const productsData = require("../productsData")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    queryInterface.bulkInsert('manufacturers', manufacturersData)

    return queryInterface.bulkInsert('products', productsData)
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('products')

    return queryInterface.bulkDelete('manufacturers')
  }
};
