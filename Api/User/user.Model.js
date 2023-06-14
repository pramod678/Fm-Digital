const mongoose = require("mongoose");

const usersScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
    userType: String,
  },
  {
    collection: "Users",
  }
);

module.exports = mongoose.model("Users", usersScehma);
