const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()

const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const cors = require('cors');

const port = process.env.PORT || 5000

connectDB()
const app = express()

// Enable CORS for all routes
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/courses', require('./routes/courseRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))

