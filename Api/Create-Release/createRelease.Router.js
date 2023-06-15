const express = require('express')
const router = express();
const {releseInfoPost,releseInfoGetAll} = require("./createRelease.Controller.js");


router.post("/releseInfoPost", releseInfoPost);
router.get("/releseInfoGetAll", releseInfoGetAll);
module.exports = router;