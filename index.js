import express from 'express'
import db from './connectDB.js'
import cookieParser from 'cookie-parser'
import customerRoute from './routes/customer.js'
import cookieRoutes from './routes/cookie.js'
import cors from 'cors'

const app = express()
const PORT = 4010

db()

app.use(cors())
app.use(express.json())
app.use(cookieParser('mysecret'))
app.use('/customer', customerRoute)
app.use('/cookie', cookieRoutes)

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => console.log('server running on port: ' + PORT))
