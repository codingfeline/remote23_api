import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const db = () => {
  mongoose
    .connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Mongo connected'))
    .catch(error => console.log(error))
}

export default db
