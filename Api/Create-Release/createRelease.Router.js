const express = require('express')
const router = express();
const {releseInfoPost,primaryArtistPost,featuringArtisttPost,releseInfoGetAll} = require("./createRelease.Controller");


router.post("/releseInfoPost", releseInfoPost);
router.post("/primaryArtistPost", primaryArtistPost);
router.post("/featuringArtisttPost", featuringArtisttPost);
router.get("/releseInfoGetAll", releseInfoGetAll);
module.exports = router;