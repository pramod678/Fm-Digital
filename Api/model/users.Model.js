const mongoose = require("mongoose");

const usersScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
    userType: String,
    createdAt: { type : Date, default: Date.now }, 
    updatedAt: { type : Date, },
  },
  {
    collection: "users",
  }
);

mongoose.model("users", usersScehma);
