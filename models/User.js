import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'name is needed'],
    minlength: [4, 'username needs at least 4 characters'],
  },
  password: {
    required: [true, 'password is required'],
    minlength: [4, 'password needs at least 4 characters'],
  },
})

export default mongoose.model('user', userSchema)
