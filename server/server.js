const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')
const cookieParser = require('cookie-parser')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => {
    console.log("Database connected successfully!")
})

app.use(express.json())
app.use(cookieParser())
app.use(cors(
    {
        origin: 'http://localhost:3000',
        methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
        credentials: true
      }
))
app.use('/app', routesUrls)
app.listen(4000, () => console.log("Server running!"))