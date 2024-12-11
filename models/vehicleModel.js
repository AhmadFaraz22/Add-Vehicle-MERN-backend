const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  model: { type: String, required: true, minlength: 3 },
  price: { type: Number, required: true },
  phone: { type: String, required: true, length: 11 },
  city: { type: String, required: true },
  images: { type: [String], required: true }, // Array of image URLs
});

module.exports = mongoose.model("Vehicle", VehicleSchema);
