const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    enrolid: {
      type: String,
      required: [true, "Please add an enrolment id"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    role: {
      type: String,
      enum: ["teacher", "admin", "ta"],
      required: [true, "Please add a role"],
    },
    school: {
      type: String,
      enum: ["school1", "school2", "school3"],
    },
    subject: {
      type: String,
      enum: ["subject1", "subject2", "subject3"],
    },
    ta_assigned: {
      type: String,
      enum: ["ta1", "ta2", "ta3"],
    },
    superpass: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
