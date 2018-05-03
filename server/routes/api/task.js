const router = require('express').Router()
const { Task } = require('../../db')

module.exports = router

// Mounted on /api/task

router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.findAll({ include: [{ all: true }] })
    res.json(tasks)
  } catch (error) {
    console.group('Project Route')
    console.log(error)
    console.groupEnd()
    next(error)
  }
})
