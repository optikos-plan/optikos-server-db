const router = require('express').Router()
module.exports = router

router.use('/', (req, res, next) => {
  res.send(`
    <h1>You can’t use up creativity.<br />The more you use, the more you have.<br />-- Maya Angelou</h1>
  `)
})

router.use('/api/projects', require('./api/project'))
router.use('/api/tasks', require('./api/task'))
