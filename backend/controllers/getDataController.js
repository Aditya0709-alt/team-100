const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");

const getAllTaDetail = asyncHandler(async (req, res) => {
  const taDetail = await User.find({ role: "ta" });
  res.status(200).json(taDetail);
});

const getAllTeacherDetail = asyncHandler(async (req, res) => {
  const teacherDetail = await User.find({ role: "teacher" });
  res.status(200).json(teacherDetail);
});

const getTaDetail = asyncHandler(async (req, res) => {
  const taDetail = await User.find({ enrolid: req.body.ta_assigned });
  res.status(200).json(taDetail);
});

const getTeacherDetail = asyncHandler(async (req, res) => {
  const teachers = await User.find({ ta_assigned: req.body.ta_assigned });
  res.status(200).json(teachers);
});

// const getSessionDetail = asyncHandler(async (req, res) => {
//   const sessionDetail = await User.find({ role: "session" });
//   res.status(200).json(sessionDetail);
// });

module.exports = {
  getAllTaDetail,
  getAllTeacherDetail,
  getTaDetail,
  getTeacherDetail,
};
