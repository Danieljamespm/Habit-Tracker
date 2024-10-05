const Habits = require('../models/Habits')

module.exports = {
    getHabits: async (req, res) => {
        console.log(req.body)
        try {
            const habits = await Habits.find()
            const habitsLeft = await Habits.countDocuments({completed: false})
            // res.json({habits, left: habitsLeft})
            res.render('habits.ejs', {habits: habits, left: habitsLeft })
            console.log(habits)
            
        } catch (err) {
            console.error(err)
        }
    },
    addHabit: async (req, res) => {
        try {
            await Habits.create({habit: req.body.newHabit, completed: false, dayComplete: false, weekComplete: false})
            console.log(`Habit ${req.body.newHabit} has been added!`)
            res.redirect('/api/habits')
        } catch (err) {
            console.log(err)
        }
    },
    deleteHabit: async (req, res)=>{
        console.log({_id: req.body.habitId})
        try{
            await Habits.findOneAndDelete(req.body.habitId)
            console.log(`Deleted ${req.body.habitId}`)
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    
