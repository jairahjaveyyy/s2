const express = require('express')
const usersModel = require('../model/usersModel')
const mongoose = require('mongoose')
const { registerUser, authUser } = require('../controller/userController')



const router = express.Router()
router.route("/register").post(registerUser);
router.route("/login").post(authUser);


module.exports = router