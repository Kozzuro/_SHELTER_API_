const mongoose = require("mongoose");
const DogsSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  breed: { type: String, required: true },
  birth: { type: String, required: true },
  alive: { type: String, required: true },
  microchip: { type: String, required: false },
  images: { type: Array, required: false },
  description: { type: String, required: true },
  characteristic: { type: Array, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
});

module.exports = mongoose.model("dogs", DogsSchema);