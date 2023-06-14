const express = require('express')
const router = express();
const {login} = require("./user.Controller.js");


router.post("/login", login);
module.exports = router;