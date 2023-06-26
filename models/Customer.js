import mongoose from 'mongoose'

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is needed'],
    minlength: [4, 'name needs at least 4 characters'],
  },
})

export default mongoose.model('Customer', customerSchema)
