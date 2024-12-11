const vehicleService = require("../services/vehicleService");

const createVehicle = async (req, res) => {
  const { model, price, phone, city } = req.body;
  try {
    // Check if images are uploaded
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "At least one image is required" });
    }

    // Get image URLs from the uploaded files
    const imageUrls = req.files.map((file) => `/uploads/${file.filename}`);

    // Save vehicle details
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
    console.error("Error in createVehicle:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createVehicle,
};
