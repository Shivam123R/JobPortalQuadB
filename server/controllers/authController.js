const UserModal = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const existingUser = await UserModal.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModal.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.error("Error in register API:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while registering",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await UserModal.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
    }

    const token = jwt.sign({ userId: user._id }, "shivamjaiswal123", {
      expiresIn: "1h",
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    console.error("Error in login API:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while logging in",
    });
  }
};

// get user
exports.getUser = async (req, res, next) => {
  try {
    const user = await UserModal.findById({ _id: req.body.user.userId });
    user.password = undefined;
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "user not found",
      });
    } else {
      return res.status(200).json({
        success: true,
        data: user,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "somthing wrong in api getUser",
    });
  }
};
