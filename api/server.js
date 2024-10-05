const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const passport = require('passport')
// const session = require('express-session')
// const MongoStore = require('connect-mongo')
// const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const listHabits = require('./routes/habits')
const cors = require('cors')

require('dotenv').config({path: './config/.env'})

connectDB()
app.use(cors())
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(logger('dev'))
// app.use(flash())





app.use('/api/habits', listHabits)




app.listen(process.env.PORT, () => {
    console.log(`server running on ${process.env.PORT}`)
})