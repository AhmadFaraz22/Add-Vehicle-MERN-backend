const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  images: { type: [String], required: true }, // Array of image URLs
}, { timestamps: true });

module.exports = mongoose.model("Vehicle", vehicleSchema);
