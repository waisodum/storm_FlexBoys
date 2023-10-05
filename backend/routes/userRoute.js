const express = require("express");
const router = express.Router();
const {registerUser, loginUser, logoutUser, forgetPassword,resetPassword, getUserDetails, updatePassword, updateProfile, getAllUsers, getSingleUser} = require("../controllers/userController");
// const { isAuthenticatedUser,isAutherisedRoles } = require("../middleware/auth");

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);


module.exports = router;