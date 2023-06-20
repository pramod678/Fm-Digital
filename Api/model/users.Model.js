const mongoose = require("mongoose");
const autoIncrement = require('mongoose-sequence')(mongoose);
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
usersScehma.plugin(autoIncrement, {inc_field: 'users_id'});
module.exports= mongoose.model("users", usersScehma);
