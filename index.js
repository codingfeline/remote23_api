import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

import customerRoute from './routes/customer.js'

import cors from 'cors'

const app = express()
const PORT = 4010

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log('connected to db!')
)

app.use(cors())
app.use(express.json())

app.use('/customer', customerRoute)

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => console.log('server running on port: ' + PORT))
