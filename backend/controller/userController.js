const asyncHandler = require('express-async-handler')
const User = require('../model/usersModel');
const generateToken = require('../utils/generateToken');

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // Validate inputs
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Name, email, and password are required.");
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists.");
    }

    // Create new user
    const user = await User.create({
        name,
        email,
        password,
    });

    // Generate token and send response
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Error occurred while creating user.");
    }
});


const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Validate inputs
    if (!email || !password) {
        res.status(400);
        throw new Error("Email and password are required.");
    }

    // Find user
    const user = await User.findOne({ email });

    // Check if user exists and password matches
    if (user) {
        if (await user.matchPassword(password)) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(401);
            throw new Error("Password does not match.");
        }
    } else {
        res.status(404);
        throw new Error("User not found.");
    }
});



module.exports = {registerUser, authUser};