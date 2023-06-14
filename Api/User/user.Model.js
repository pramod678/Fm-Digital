const mongoose = require("mongoose");

const loginScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
    userType: String,
  },
  {
    collection: "login",
  }
);

module.exports = mongoose.model("login", loginScehma);
