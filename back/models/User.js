import mongoose from 'mongoose'
import mongooseTypeEmail from 'mongoose-type-email'
import bcrypt from 'bcrypt'

let UserSchema = new mongoose.Schema({
  username: {
    type: mongoose.SchemaTypes.Email,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
});

UserSchema.methods.comparePasswords = function(password) {
  return bcrypt.compareSync(password, this.password);
}

export default mongoose.model('User', UserSchema);