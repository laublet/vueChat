import mongoose from 'mongoose'
import mongooseTypeEmail from 'mongoose-type-email'
import bcrypt from 'bcrypt'

let MessageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  senderId: {
    type: String
  },
  receiverId: {
    type: String
  },
  read: {
    type: Boolean
  },
  readDate: {
    type: Date,
    default: Date.now
  },
});

export default mongoose.model('Message', MessageSchema);