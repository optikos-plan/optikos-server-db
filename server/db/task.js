const Sequelize = require('sequelize')
const db = require('./db')

const task = db.define('task', {
  startDate: {
    type: Sequelize.DATE
  },

  endDate: {
    type: Sequelize.DATE
  },

  status: {
    type: Sequelize.ENUM,
    values: ['in_progress', 'pending', 'completed'],
    defaultValue: 'pending'
  },

  title: {
    type: Sequelize.STRING
  },

  description: {
    type: Sequelize.TEXT
  }
})

module.exports = task
