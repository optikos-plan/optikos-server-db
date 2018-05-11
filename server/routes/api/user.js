const router = require('express').Router()
const { User } = require('../../db')

module.exports = router

// Mounted on /api/project

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({ include: [{all: true}]})
    res.json(users)
  } catch (error) {
    console.group('User Route')
    console.log(error)
    console.groupEnd()
    next(error)
  }
})
