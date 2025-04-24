
const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const cookieParser = require('cookie-parser')

require('dotenv').config()
connectDB()

const app = express()
const PORT = process.env.PORT || 5000

// Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:['http://localhost:3000'],
    methods:['POST','GET','PUT','DELETE'],
    credentials:true
}))

// Server Listening
app.listen(PORT, ()=> {
    console.log(`Server  is running on http://localhost:${PORT}`)
})