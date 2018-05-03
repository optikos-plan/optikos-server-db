const Sequelize = require('sequelize')
const db = require('./db')

const Comment = db.define('comment', {
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  date: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Comment
