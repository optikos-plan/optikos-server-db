const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/optikos')

module.exports = db
