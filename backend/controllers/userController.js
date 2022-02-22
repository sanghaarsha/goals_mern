const jwt = import("jsonwebtoken");
const bcrypt = import("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc Register new user
// @route POST /api/users/
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Register User" });
});

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Login User" });
});

// @desc Get user data
// @route GET /api/users/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "User Data" });
});

module.exports = {
    registerUser,
    loginUser,
    getMe,
};
