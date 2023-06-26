import express from 'express'

import cors from 'cors'

const app = express()
const PORT = 4010

app.use(cors())

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => console.log('server running on port: ' + PORT))
