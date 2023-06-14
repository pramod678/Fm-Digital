
const express = require('express')
const router = express();
const authRoute = require("./User/user.Router.js");
require("./User/user.Model.js");
// require("./imageDetails");

router.use("/auth", authRoute);
module.exports = router;