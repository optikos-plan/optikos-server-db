const router = require('express').Router()
const { Task } = require('../../db')

module.exports = router

// Mounted on /api/task

router.get('/:taskId', async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      where: {
        id: req.params.taskId
      },
      include: [{ all: true }]
    })
    res.json(tasks)
  } catch (error) {
    console.group('Task Route')
    console.log(error)
    console.groupEnd()
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.findAll({ include: [{ all: true }] })
    res.json(tasks)
  } catch (error) {
    console.group('Task Route')
    console.log(error)
    console.groupEnd()
    next(error)
  }
})

router.put('/:taskId', async (req, res, next) => {
  try {
    const taskId = req.params.taskId
    const task = await Task.findById(taskId)
    task.update(req.body)
    res.status(204).end()
  } catch (error) {
    console.group('Task Route')
    console.log(error)
    console.groupEnd()
    next(error)
  }
})
