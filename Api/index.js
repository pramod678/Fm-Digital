
const express = require('express')
const router = express();
const authRoute = require("./User/user.Router.js");
const users = require("./User/user.Model.js");


router.use("/user", authRoute);
module.exports = router;