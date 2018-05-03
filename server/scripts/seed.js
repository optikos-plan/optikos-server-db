const { db, Comment, Document, Project, Task, User } = require('../db');

const seed = async () => {
  await db.sync({ force: true })
  console.log('db synced!')

  const users = await Promise.all([
    User.create({ email: 'cody@email.com', name: 'Jason' }),
    User.create({ email: 'grace@hopper.com', name: 'Amal' })
  ])
  console.log(`seeded ${users.length} users`)
  console.log('email: ', users[0].email )
  console.log('email: ', users[1].email )
  console.log(`seeded successfully`)

  const projects = await Promise.all([
    Project.create({ title: 'Project 1'})
  ])

  const [task1, task2] = await Promise.all([
    Task.create({ title: 'First task', description: 'Testing associations', userId: users[0].id}),
    Task.create({ title: 'Second task', description: 'Testing associations', userId: users[1].id})
  ])
  await task2.addDependencies(task1)
  console.log('set', task2.prototype)

  console.log(`relationships created`)
  console.log(`seeded successfully`)
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

console.log('seeding...')
