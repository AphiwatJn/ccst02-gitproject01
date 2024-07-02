require('dotenv').config()
const express = require('express')
const notFound = require('./middlewares/not-found')
const errorMw = require('./middlewares/error-mw')
const authRoute = require('./routes/auth-route')
const app = express()
const todoRoute = require('./routes/todo-route')

// Aphiwat 2 comment 

app.use('/auth',authRoute )
app.use('/todo',todoRoute)
app.use(notFound)
app.use(errorMw)
const port = process.env.PORT || 8888
app.listen(port, ()=>console.log('Server running on',port))