const express = require('express')
const router = express();
const {releseInfoPost,primaryArtistPost,primaryArtistGet,featuringArtisttPost,releseInfoGetAll} = require("./createRelease.Controller");
const {ImageDocument} = require("../../middleware/upload.multer")

router.post("/releseInfoPost",ImageDocument, releseInfoPost);
router.get("/primaryArtistGet/:id", primaryArtistGet);
router.post("/primaryArtistPost", primaryArtistPost);
router.post("/featuringArtisttPost", featuringArtisttPost);
router.get("/releseInfoGetAll", releseInfoGetAll);

module.exports = router;