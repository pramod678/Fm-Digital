const express = require('express')
const router = express();
const multer  = require('multer')
const {releseInfoPost,primaryArtistPost,primaryArtistGet,featuringArtisttGet,featuringArtisttPost,releseInfoGetAll,songsInfoPost} = require("./createRelease.Controller");
const {ImageDocument,audioDocument} = require("../../middleware/upload.multer")

router.post("/releseInfoPost",ImageDocument, releseInfoPost);
router.get("/primaryArtistGet/:id", primaryArtistGet);
router.get("/featuringArtisttGet/:id", featuringArtisttGet);
router.post("/primaryArtistPost", primaryArtistPost);
router.post("/featuringArtisttPost", featuringArtisttPost);
router.get("/releseInfoGetAll", releseInfoGetAll);
router.post("/songsInfoPost",audioDocument, songsInfoPost);

module.exports = router;