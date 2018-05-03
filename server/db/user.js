const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define(
	'user',
	{
		// create a unique index on name and email

	  name: {
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
	},
	{
		indexes: [
			{
				unique: true,
				fields: [ 'email' ]
			}
		]
	}
);

module.exports = User;
