import express from 'express'
import db from './connectDB.js'

import customerRoute from './routes/customer.js'
import cors from 'cors'

const app = express()
const PORT = 4010

db()

app.use(cors())
app.use(express.json())

app.use('/customer', customerRoute)

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => console.log('server running on port: ' + PORT))
