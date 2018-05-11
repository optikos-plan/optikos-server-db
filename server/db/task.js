const Sequelize = require('sequelize')
const db = require('./db')

const task = db.define('task', {
  // changed to display date w/o time
  startDate: {
    type: Sequelize.DATEONLY
  },
  // changed to display date w/o time
  endDate: {
    type: Sequelize.DATEONLY
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
