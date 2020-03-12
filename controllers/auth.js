const User = require('../models/User');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

//@desc         Register user
//@route        @GET /api/v1/auth/register
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  //Create user
  const user = await User.create({
    name,
    email,
    password,
    role
  });

  res.status(200).json({ success: true });
});
//@desc         Login user
//@route        @POST /api/v1/auth/login

/* exports.register = asyn = (req, res, next) => {
    const { email, password } = req.body;
  
    // Validate email & password
    if(!email || !password){
        return next(new ErrorResponse('Please provide an email and password', 400));
    }

    // Check for user
    const user = await user.findOne({ email }).select('+password');

    if(!user) {
        return next(new ErrorResponse('Invalid credential', 401)); // User doesn't found
    }
  
    // Check if password matches
    const isMatch = await user.matchPassword(password);

    if(!isMatch) {
        return next(new ErrorResponse('Invalid credential', 401)); //Password doesn't match
    }

    // Create token
    const token = user.getSignedJwtToken();
  
    res.status(200).json({ success: true, token })
  }
 */
