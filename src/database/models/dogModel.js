const mongoose = require("mongoose");
const DogsSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: String, required: true },
  images: { type: Array, required: true },
  description: { type: String, required: true },
  characteristic: { type: Array, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
});

module.exports = mongoose.model("dogs", DogsSchema);