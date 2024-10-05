const mongoose = require('mongoose')

const HabitSchema = new mongoose.Schema({
    habit: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    dayComplete: {
        type: Boolean,
        required: true
    },
    weekComplete: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('habits', HabitSchema)