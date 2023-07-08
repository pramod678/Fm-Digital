const express = require('express')
const router = express();
const multer  = require('multer')
const {releseInfoPost,primaryArtistPost,primaryArtistGet,featuringArtisttGet,featuringArtisttPost,releseInfoGetOne,releseInfoGetAll,songsInfoPost,platformPost,submissionGet,catalogsGet,genreGet,languageGet} = require("./createRelease.Controller");
const {ImageDocument,audioDocument} = require("../../middleware/upload.multer")

router.post("/releseInfoPost",ImageDocument, releseInfoPost);
router.get("/primaryArtistGet/:users_id", primaryArtistGet);
router.get("/featuringArtisttGet/:users_id", featuringArtisttGet);
router.post("/primaryArtistPost", primaryArtistPost);
router.post("/featuringArtisttPost", featuringArtisttPost);
router.get("/releseInfoGetOne/:users_id", releseInfoGetOne);
router.get("/releseInfoGetAll", releseInfoGetAll);
router.post("/songsInfoPost",audioDocument, songsInfoPost);
router.post("/platformPost", platformPost);
router.get("/submissionGet/:users_id", submissionGet);
router.get("/catalogsGet/:users_id", catalogsGet);
router.get("/genreGet", genreGet);
router.get("/languageGet", languageGet);
module.exports = router;