const db = require('./db')
const Comment = require('./comment')
const Document = require('./document')
const Project = require('./project')
const Task = require('./task')
const User = require('./user')

Task.belongsTo(Project)
Project.hasMany(Task)

Task.belongsToMany(Task, {through: 'task_task', as: 'dependencies'})

Document.belongsTo(Task)
Task.hasMany(Document)

User.hasMany(Task)
Task.belongsTo(User)

Comment.belongsTo(User)
User.hasMany(Comment)

Task.hasMany(Comment)
Comment.belongsTo(Task)


module.exports = {
  db,
  Comment,
  Document,
  Project,
  Task,
  User
}
