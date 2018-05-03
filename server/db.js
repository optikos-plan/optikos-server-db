const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/optikos')

db.define('test', {
  testField: Sequelize.TEXT
  }
)
module.exports = db
