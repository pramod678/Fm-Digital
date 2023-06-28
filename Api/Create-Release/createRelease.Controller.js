const releseInfoTable = require("../model/releseInfo.Model");
const featuringArtistTable = require("../model/featuringArtist.Model");
const primaryArtistTable = require("../model/primaryArtist.Model");
const songsInfoTable = require("../model/songsInfo.Model");
const platformTable = require("../model/platform.Model");
const moment = require("moment-timezone");

const releseInfoPost = async (req, res) => {
  const {
    users_id,
    ReleaseType,
    ReleaseTitle,
    PrimaryArtist,
    FeaturingArtist,
    Genre,
    SubGenre,
    LabelName,
    ReleaseDate,
    PLine,
    CLine,
    UPCEAN,
    ImageDocument,
  } = req.body;
  var currentDate = moment(new Date()).add(5.5, "h").toDate();
  // console.log("PrimaryArtist",PrimaryArtist);
  try {
    const Data = await releseInfoTable.create({
      users_id: users_id,
      ReleaseType: ReleaseType,
      ReleaseTitle: ReleaseTitle,
      PrimaryArtist: PrimaryArtist,
      FeaturingArtist: FeaturingArtist,
      Genre: Genre,
      SubGenre: SubGenre,
      LabelName: LabelName,
      ReleaseDate: ReleaseDate,
      PLine: PLine,
      CLine: CLine,
      UPCEAN: UPCEAN,
      ImageDocument: req.files["ImageDocument"]?.[0].filename
        ? "/releseInfo/" + req.files["ImageDocument"]?.[0].filename
        : "NULL",
      createdAt: currentDate,
    });
    return res.send({ status: "ok", Data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error occurred while fetching all data",
    });
  }
};

const songsInfoPost = async (req, res) => {
  const {
    users_id,
    Trackversion,
    Instrumental,
    VersionSubtitle,
    Title,
    Primaryartist,
    FeaturingArtist,
    Author,
    Composer,
    Producer,
    Publisher,
    ISRC,
    Genre,
    Subgenre,
    ExplicitVersion,
    TrackTitleLanguage,
    LyricsLanguage,
    Lyrics,
    CallerTuneTiming,
    DistributeMusicvideo,
  } = req.body;
  var currentDate = moment(new Date()).add(5.5, "h").toDate();
  // console.log("req.files",req.files["AudioDocument"]?.[0].filename);
  try {
    const Data = await songsInfoTable.create({
      users_id: users_id,
      AudioDocument: req.files["AudioDocument"]?.[0].filename
        ? "/songsInfo/" + req.files["AudioDocument"]?.[0].filename
        : "NULL",
      Trackversion: Trackversion,
      Instrumental: Instrumental,
      Title: Title,
      VersionSubtitle: VersionSubtitle,
      Primaryartist: Primaryartist,
      FeaturingArtist: FeaturingArtist,
      Author: Author,
      Composer: Composer,
      Producer: Producer,
      Publisher: Publisher,
      ISRC: ISRC,
      Genre: Genre,
      Subgenre: Subgenre,
      ExplicitVersion: ExplicitVersion,
      TrackTitleLanguage: TrackTitleLanguage,
      LyricsLanguage: LyricsLanguage,
      Lyrics: Lyrics,
      CallerTuneTiming: CallerTuneTiming,
      DistributeMusicvideo: DistributeMusicvideo,
      createdAt: currentDate,
    });
    return res.send({ status: "ok", Data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error occurred while fetching all data",
    });
  }
};
const primaryArtistPost = async (req, res) => {
  const { users_id, PrimaryArtist } = req.body;
  var currentDate = moment(new Date()).add(5.5, "h").toDate();
  console.log("currentDate", currentDate);
  try {
    const Data = await primaryArtistTable.create({
      users_id: users_id,
      PrimaryArtist: PrimaryArtist,
      createdAt: currentDate,
    });
    return res.send({ status: "ok", Data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error occurred while fetching all data",
    });
  }
};
const platformPost = async (req, res) => {
  const { users_id, Audio, CRBT, VideoPlatform } = req.body;
  var currentDate = moment(new Date()).add(5.5, "h").toDate();
  console.log("currentDate", currentDate);
  try {
    // console.log(">>>>-----",req.body);
    const Data = await platformTable.create({
      users_id: users_id,
      Audio: Audio,
      CRBT: CRBT,
      VideoPlatform: VideoPlatform,
      createdAt: currentDate,
    });
    return res.send({ status: "ok", Data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error occurred while fetching all data",
    });
  }
};
const featuringArtisttPost = async (req, res) => {
  const { users_id, FeaturingArtist } = req.body;

  var currentDate = moment(new Date()).add(5.5, "h").toDate();
  console.log("currentDate", currentDate);
  try {
    const Data = await featuringArtistTable.create({
      users_id: users_id,
      FeaturingArtist: FeaturingArtist,
      createdAt: currentDate,
    });
    return res.send({ status: "ok", Data });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Error occurred while fetching all data",
    });
  }
};
const releseInfoGetAll = async (req, res) => {
  try {
    const allUser = await releseInfoTable.find({});
    //   console.log("allUser",allUser);
    return res.send({ status: "ok", data: allUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error occurred while fetching all data",
    });
  }
};
const primaryArtistGet = async (req, res) => {
  try {
    const allUser = await releseInfoTable.findOne({
      users_id: req.params.users_id,
    });
    // console.log("allUser",allUser);
    return res.send({ status: "ok", Data: JSON.parse(allUser.PrimaryArtist) });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error occurred while fetching all data",
    });
  }
};
const featuringArtisttGet = async (req, res) => {
  try {
    const allUser = await releseInfoTable.findOne({
      users_id: req.params.users_id,
    });
    // console.log("allUser",allUser);
    return res.send({
      status: "ok",
      Data: JSON.parse(allUser.FeaturingArtist),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error occurred while fetching all data",
    });
  }
};

module.exports = {
  releseInfoPost,
  primaryArtistPost,
  featuringArtisttGet,
  primaryArtistGet,
  featuringArtisttPost,
  releseInfoGetAll,
  songsInfoPost,
  platformPost,
};
