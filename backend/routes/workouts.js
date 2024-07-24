const express = require('express')
const { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// GET All Workouts
router.get('/', getWorkouts)

// GET a Single Workouts
router.get('/:id', getWorkout)

// POST a New Workouts
router.post('/', createWorkout)

// DELETE a Workouts
router.delete('/:id', deleteWorkout)

// UPDATE a Workouts
router.patch('/:id', updateWorkout)


module.exports = router