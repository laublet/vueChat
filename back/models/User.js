import mongoose from "mongoose";
import mongooseTypeEmail from "mongoose-type-email";
import bcrypt from "bcrypt";

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
  address: {
    country: {
      type: String,
      default: null
    },
    region: {
      type: String,
      default: null
    },
    city: {
      type: String,
      default: null
    },
    street: {
      type: String,
      default: null
    },
    postal: {
      type: String,
      default: null
    },
    longitude: {
      type: Number,
      default: null
    },
    latitude: {
      type: Number,
      default: null
    }
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  lastUpdateDate: {
    type: Date,
    default: null
  }
});

UserSchema.methods.comparePasswords = function(password) {
  return bcrypt.compareSync(password, this.password);
};

export default mongoose.model("User", UserSchema);
