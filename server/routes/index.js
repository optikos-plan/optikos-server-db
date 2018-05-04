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
