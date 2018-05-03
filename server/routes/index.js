const router = require('express').Router()
module.exports = router

router.use('/api/projects', require('./api/project'))
