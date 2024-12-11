const vehicleService = require("../services/vehicleService");

const createVehicle = async (req, res) => {
  const { model, price, phone, city } = req.body;

  try {
    // Get image URLs from the uploaded files
    const imageUrls = req.files.map((file) => `/uploads/${file.filename}`);

    const newVehicle = await vehicleService.saveVehicle({
      userId: req.user.id,
      model,
      price,
      phone,
      city,
      images: imageUrls,
    });

    res.status(201).json(newVehicle);
  } catch (error) {
    if (error.message === "All fields are required") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createVehicle,
};
