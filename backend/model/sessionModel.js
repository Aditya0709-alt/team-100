const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  session_name: {
    type: String,
    required: [true, "Please add a session name"],
  },
  session_date: {
    type: String,
    required: [true, "Please add a session date"],
  },
  session_school: {
    type: String,
    enum: ["school1", "school2", "school3"],
    required: [true, "Please add a session school"],
  },
});

module.exports = mongoose.model("Session", sessionSchema);
