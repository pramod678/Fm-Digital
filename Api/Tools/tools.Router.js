const express = require('express')
const router = express();
const multer  = require('multer')
const { youtubeClaimsPost,profileLinkingPost} = require("./tools.Controller");


router.post("/youtubeClaimsPost", youtubeClaimsPost);
router.post("/profileLinkingPost", profileLinkingPost);

module.exports = router;