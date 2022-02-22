const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
    let generateToken;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // Get token from header [formatted like: Bearer xxxxx]
            token = req.headers.authorization.split(" ")[1]; // ["Bearer", 'xxxxx']
            // Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // Get user from token
            req.user = await User.findById(decoded.id).select("-password"); // do not include password
            next();
        } catch (err) {
            console.log(err);
            res.status(401);
            throw new err("Not Authorized");
        }
    }

    if (!token) {
        res.status(401);
        throw new err("Not Authorized, no token!");
    }
});

module.exports = { protect };
