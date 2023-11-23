import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

/**
 * @desc    Register a new user
 * @route   POST /api/users/register
 * @access  Public
 */
const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, phoneNumber, adress, password, isAdmin } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    fullName,
    email,
    phoneNumber,
    adress,
    password,
    isAdmin,
  });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      adress: user.adress,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

/**
 * @desc    login user
 * @route   GET /api/users/login
 * @access  Public
 */

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
  });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      adress: user.adress,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

/**
 * @desc    reset password
 * @route   POST /api/users/profile
 * @access  Public
 */
const resetPassword = asyncHandler(async (req, res) => {
  const { email, newPassword } = req.body;
  try {
    const user = await User.findOne({
      email,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.password = newPassword;
    await user.save();
    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * @desc    update user profile
 * @route   PUT /api/users/profile
 * @access  Private
 */

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.fullName = req.body.fullName || user.fullName;
    user.email = req.body.email || user.email;
    user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
    user.adress = req.body.adress || user.adress;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      fullName: updatedUser.fullName,
      email: updatedUser.email,
      phoneNumber: updatedUser.phoneNumber,
      adress: updatedUser.adress,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

/**
 * @desc    logout user
 * @route   GET /api/users/logout
 * @access  Public
 */
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({
    message: "User logged out",
  });
});

export {
  registerUser,
  loginUser,
  resetPassword,
  updateUserProfile,
  logoutUser,
};
