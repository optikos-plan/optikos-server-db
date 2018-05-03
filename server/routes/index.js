const router = require('express').Router()
module.exports = router

router.use('/api/projects', require('./api/project'))
router.use('/api/tasks', require('./api/task'))
