const express = require("express");
const vehicleController = require("../controllers/vehicleController");
const upload = require("../middleware/uploadMiddleware");
const { verifyToken } = require("../middleware/auth");

const router = express.Router();

// POST /api/vehicle
router.post(
  "/",
  verifyToken,
  upload.array("images", 20), // Maximum 20 images
  vehicleController.createVehicle
);

module.exports = router;
