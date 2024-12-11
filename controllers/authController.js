const authService = require("../services/authService");

// Login Controller
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { token } = await authService.loginUser(email, password);
    res.status(200).json({ token });
  } catch (error) {
    if (error.message === "Invalid credentials") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  login,
};
