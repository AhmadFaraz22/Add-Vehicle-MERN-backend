const Vehicle = require("../models/vehicleModel");

const saveVehicle = async ({ userId, model, price, phone, city, images }) => {
  if (!model || !price || !phone || !city) {
    throw new Error("All fields are required");
  }

  const newVehicle = new Vehicle({
    user: userId,
    model,
    price,
    phone,
    city,
    images,
  });

  return await newVehicle.save();
};

module.exports = {
  saveVehicle,
};
