const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User"); // Adjust the path based on your structure

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://AhmadFaraz:12345@cluster0.u61lw.mongodb.net/")
  .then(async () => {
    console.log("Connected to MongoDB");

    // Hash the password
    const hashedPassword = await bcrypt.hash("123456abc", 10);

    // Create the user
    const user = new User({
      email: "Amjad@desolint.com",
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();
    console.log("User inserted successfully");

    // Close the connection
    mongoose.disconnect();
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
