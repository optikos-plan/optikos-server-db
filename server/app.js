const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { db } = require('./db')
const cors = require('express-cors')
const app = express()

app.use(
  cors({
    allowedOrigins: ['localhost:*']
  })
)

const routes = require('./routes')

const PORT = process.env.PORT || 3000

// Logging middleware
app.use(morgan('dev'))

// Body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handling endware
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message || 'Internal server error')
})

db.sync().then(() => console.log('The database is synced'))
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
