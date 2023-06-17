
const express = require('express')
const router = express();
const authRoute = require("./User/users.Router.js");
const createRelease =require("./Create-Release/createRelease.Router.js")
// const users = require("./User/user.Model.js");

router.use("/user", authRoute);
router.use("/createRelease", createRelease);
module.exports = router;