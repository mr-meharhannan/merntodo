const cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const taskRoutes = require('./routes/taskRoutes')
const authRoutes = require('./routes/authRoutes')


app.use(cors())
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/tasks', taskRoutes)

const env = require('dotenv')
env.config()

mongoose.connect(process.env.MONGO_URI,)
.then(() =>
    {
    console.log('MongoDB connected')
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`)
    })
}
)
.catch(err => console.log(err))

app.use('/tasks', taskRoutes)