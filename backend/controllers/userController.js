const ErrorHandler = require('../utils/errorHandler');
const asyncErrorFunction = require('../middleware/asyncErrorFunction');
const User = require('../models/userModel');
const { sendJWTToken } = require('../utils/jwtService');
// const userModel = require('../models/userModel');
const sendEmail = require("../utils/sendEmail")


// registration of user
exports.registerUser = asyncErrorFunction(async (req, res, err) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: 'this is demo id',
      url: 'publicurl',
    },
  });
  sendJWTToken(user, 201, res);
});

// Login User
exports.loginUser = asyncErrorFunction(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(
      new ErrorHandler('Please enter a valid email and password', 400)
    );
  }

   var user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorHandler('Password or Email does not match', 401));
  }

  const isPasswordMatched = user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler('Password or Email does not match', 401));
  }

  sendJWTToken(user, 200, res);
 
});




