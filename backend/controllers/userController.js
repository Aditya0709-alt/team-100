const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");

//desc register user
//route POST /api/users/register
//access public
const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    password,
    school,
    enrolid,
    role,
    ta_assigned,
    subject,
    superpass,
  } = req.body;
  if (!name || !enrolid || !password || !role) {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  const userExists = await User.findOne({ enrolid });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create user
  const user = await User.create({
    name,
    enrolid,
    password: hashedPassword,
    role,
    school,
    subject,
    ta_assigned,
    superpass,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      enrolid: user.enrolid,
      role: user.role,
      school: user.school,
      subject: user.subject,
      ta_assigned: user.ta_assigned,
      superpassword: user.superpass,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});

//desc Authenticate a user
//route POST /api/login
//access public

const loginUser = asyncHandler(async (req, res) => {
  const { enrolid, password } = req.body;

  //Check if user exists
  const user = await User.findOne({ enrolid });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      enrolid: user.enrolid,
      role: user.role,
      school: user.school,
      subject: user.subject,
      ta_assigned: user.ta_assigned,
      superpass: user.superpass,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

//desc get user data
//route GET /api/users/:id
//access private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// Generate token for user
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
