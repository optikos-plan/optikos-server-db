const fs = require('fs')
const path = require('path')
const router = require('express').Router()
module.exports = router

router.get('/', (req, res, next) => {
  res.send(`
    <span>You can’t use up creativity.<br />The more you use, the more you have.<br />-- Maya Angelou</span>

    <h1>test routes</h1>
    <ul>
      <li><a href="/api/projects">all projects</a></li>
      <li><a href="/api/tasks">all tasks</a></li>
    </ul>

  `)
})

router.use('/api/projects', require('./api/project'))
router.use('/api/tasks', require('./api/task'))

// for testing serialize/deserialize
//
const layoutFile = path.join(__dirname, 'sync-layout.json')

router.post('/api/serialize', (req, res, next) => {
  try {
    const serializedLayout = JSON.stringify(req.body, undefined, 2)
    console.log(
      'POST Serialized Data',
      JSON.stringify(serializedLayout, undefined, 2)
    )
    fs.writeFileSync(layoutFile, serializedLayout)
    res.sendStatus(201)
  } catch (error) {
    console.log('POST Error', error)
    next(error)
  }
})

router.get('/api/serialize', (req, res, next) => {
  try {
    const serializedLayout = JSON.parse(fs.readFileSync(layoutFile).toString())
    console.log('GET', serializedLayout)
    console.log('layout:', serializedLayout)
    res.send(serializedLayout)
  } catch (error) {
    console.log('GET Error', error)
    next(error)
  }
})
