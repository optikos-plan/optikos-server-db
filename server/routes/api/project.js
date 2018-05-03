const router = require('express').Router()
const { Project } = require('../../db')

module.exports = router

// Mounted on /api/project

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.findAll()
    res.json(projects)
  } catch (error) {
    console.group('Project Route')
    console.log(error)
    console.groupEnd()
    next(error)
  }
})
