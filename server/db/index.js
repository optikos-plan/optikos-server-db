const db = require('./db')
const Comment = require('./comment')
const Document = require('./document')
const Project = require('./project')
const Task = require('./task')
const User = require('./user')

Task.belongsTo(Project)
Project.hasMany(Task)

module.exports = {
  db
}
