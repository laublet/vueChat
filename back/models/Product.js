import mongoose from "mongoose";

let ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  pictures: {},
  userId: {
    type: String,
    required: true
  },
  adress: {}
});

export default mongoose.model("Product", ProductSchema);
