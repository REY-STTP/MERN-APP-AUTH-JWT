const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// Get All Workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAT: -1 })

    res.status(200).json(workouts)
}

// Get a Single Workouts
const getWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such workout' })
    }

    const workout = await Workout.findById(id)

    if(!workout) {
        return res.status(404).json({ error: 'no such workout' })
    }

    res.status(200).json(workout)
}

// Create New Workouts
const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body

    // add doc to DB
    try{
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE a Workouts
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such workout' })
    }

    const workout = await Workout.findOneAndDelete({ _id: id})

    if(!workout) {
        return res.status(400).json({ error: 'no such workout' })
    }

    res.status(200).json(workout)
}

// UPDATE a Workouts
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such workout' })
    }

    const workout = await Workout.findOneAndUpdate({ _id: id}, {
        ...req.body
    })

    if(!workout) {
        return res.status(400).json({ error: 'no such workout' })
    }

    res.status(200).json(workout)
}

module.exports = { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout }