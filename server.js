require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// Import Routes
const authRoutes = require("./routes/authRoute");
const vehicleRoutes = require("./routes/vehicleRoute");

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(cors({ origin: "http://localhost:3000" })); // Replace with your frontend URL
app.use(express.json());

// Serve static files (uploads)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/vehicle", vehicleRoutes);

// MongoDB Connection and Server Start
const startServer = async () => {
  try {
    // MongoDB Connection
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Start Express Server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

// Start the server
startServer();
