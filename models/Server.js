import mongoose from 'mongoose'

const serverSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: [true, 'IP is needed'],
    minlength: [8, 'IP needs at least 8 characters'],
  },
  hostname: {
    type: String,
  },
  username: {
    type: String,
    required: [true, 'username is needed'],
  },
  password: {
    type: String,
    required: [true, 'password is needed'],
  },
})

export default mongoose.model('Server', serverSchema)
