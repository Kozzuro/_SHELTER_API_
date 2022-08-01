const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const AnimalsSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  breed: { type: String, required: true },
  birth: { type: String, required: true },
  alive: { type: String, required: true },
  microchip: { type: String, required: false },
  images: { type: Array, required: true },
  description: { type: String, required: true },
  characteristic: { type: Array, required: false },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
});

AnimalsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Animals", AnimalsSchema);