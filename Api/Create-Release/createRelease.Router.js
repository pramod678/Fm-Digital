const express = require('express')
const router = express();
const multer  = require('multer')
const {releseInfoPost,primaryArtistPost,primaryArtistGet,featuringArtisttGet,featuringArtisttPost,releseInfoGetAll,songsInfoPost,platformPost} = require("./createRelease.Controller");
const {ImageDocument,audioDocument} = require("../../middleware/upload.multer")

router.post("/releseInfoPost",ImageDocument, releseInfoPost);
router.get("/primaryArtistGet/:users_id", primaryArtistGet);
router.get("/featuringArtisttGet/:users_id", featuringArtisttGet);
router.post("/primaryArtistPost", primaryArtistPost);
router.post("/featuringArtisttPost", featuringArtisttPost);
router.get("/releseInfoGetAll", releseInfoGetAll);
router.post("/songsInfoPost",audioDocument, songsInfoPost);
router.post("/platformPost", platformPost);

module.exports = router;