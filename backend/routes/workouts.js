const express = require('express')
const { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout } = require('../contollers/workoutController')
const router = express.Router()

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