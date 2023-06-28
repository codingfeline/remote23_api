import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'
import { Schema } from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'name is needed'],
    minlength: [4, 'username needs at least 4 characters'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'email is needed'],
    minlength: [4, 'email needs at least 4 characters'],
  },
})

userSchema.plugin(passportLocalMongoose)

export default mongoose.model('user', userSchema)
