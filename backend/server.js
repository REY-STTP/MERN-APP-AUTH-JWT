require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// Connected to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listening request
        app.listen(process.env.PORT, () => {
            console.log(`EVOS APP listening at http://localhost:${process.env.PORT}/`)
        })
    })
    .catch((error) => {
        console.log(error)
    })