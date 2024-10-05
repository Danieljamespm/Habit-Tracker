const express = require('express')
const router = express.Router()
const habitController = require('../controllers/habits')


router.get('/', habitController.getHabits)

router.post('/addHabit', habitController.addHabit)

router.delete('/deleteHabit', habitController.deleteHabit)

module.exports = router