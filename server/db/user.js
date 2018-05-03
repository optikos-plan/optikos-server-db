const Sequelize = require('sequelize')
const db = require('./db')

const User = db.define('User', {
  // create a unique index on name and email

  indexes: [
    {
      unique: true,
      fields: ['email']
    }
  ],

  title: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  email: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  }
})

module.exports = User
