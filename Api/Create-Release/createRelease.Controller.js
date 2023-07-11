const releseInfoTable = require("../model/releseInfo.Model");
const featuringArtistTable = require("../model/featuringArtist.Model");
const subMissionTable = require("../model/submission.Model");
const primaryArtistTable = require("../model/primaryArtist.Model");
const songsInfoTable = require("../model/songsInfo.Model");
const platformTable = require("../model/platform.Model");
const genreTable = require("../model/genre.Model");
const languageTable = require("../model/language.Model");
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
    Status,
  } = req.body;
  var currentDate = moment(new Date()).add(5.5, "h").toDate();
  // console.log("PrimaryArtist",PrimaryArtist);
  try {
    // const allUser = await releseInfoTable.findOne({
    //   users_id: users_id,
    // });
    // if (allUser) {
    //   const data = await releseInfoTable.updateOne(
    //     { users_id: users_id },
    //     {
    //       users_id: users_id,
    //       ReleaseType: ReleaseType,
    //       ReleaseTitle: ReleaseTitle,
    //       PrimaryArtist: PrimaryArtist,
    //       FeaturingArtist: FeaturingArtist,
    //       Genre: Genre,
    //       SubGenre: SubGenre,
    //       LabelName: LabelName,
    //       ReleaseDate: ReleaseDate,
    //       PLine: PLine,
    //       CLine: CLine,
    //       UPCEAN: UPCEAN,
    //       ImageDocument: req.files["ImageDocument"]?.[0].filename
    //         ? "/ImageDocument/" + req.files["ImageDocument"]?.[0].filename
    //         : "NULL",
    //       createdAt: currentDate,
    //     }
    //   );
    //   return res.send({ status: "Update", data });
    // } else {
    //   const data = await releseInfoTable.create({
    //     users_id: users_id,
    //     ReleaseType: ReleaseType,
    //     ReleaseTitle: ReleaseTitle,
    //     PrimaryArtist: PrimaryArtist,
    //     FeaturingArtist: FeaturingArtist,
    //     Genre: Genre,
    //     SubGenre: SubGenre,
    //     LabelName: LabelName,
    //     ReleaseDate: ReleaseDate,
    //     PLine: PLine,
    //     CLine: CLine,
    //     UPCEAN: UPCEAN,
    //     ImageDocument: req.files["ImageDocument"]?.[0].filename
    //       ? "/ImageDocument/" + req.files["ImageDocument"]?.[0].filename
    //       : "NULL",
    //     createdAt: currentDate,
    //   });
    //   return res.send({ status: "Create", data });
    // }
    const data = await releseInfoTable.create({
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
        ? "/ImageDocument/" + req.files["ImageDocument"]?.[0].filename
        : "NULL",
      createdAt: currentDate,
      Status: Number(Status),
    });
    return res.send({ status: "ok", data });
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
        ? "/AudioDocument/" + req.files["AudioDocument"]?.[0].filename
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
  const { users_id, PrimaryArtist, SpotifyId, AppleId } = req.body;
  var currentDate = moment(new Date()).add(5.5, "h").toDate();
  console.log("currentDate", currentDate);
  try {
    const Data = await primaryArtistTable.create({
      users_id: users_id,
      AppleId: AppleId,
      SpotifyId: SpotifyId,
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
  const { users_id, FeaturingArtist, SpotifyId, AppleId } = req.body;

  var currentDate = moment(new Date()).add(5.5, "h").toDate();
  console.log("currentDate", currentDate);
  try {
    const Data = await featuringArtistTable.create({
      users_id: users_id,
      AppleId: AppleId,
      SpotifyId: SpotifyId,
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
const submissionPost = async (req, res) => {
  const { users_id, releseInfo_id, Status } = req.body;

  var currentDate = moment(new Date()).add(5.5, "h").toDate();
  console.log("currentDate", currentDate);
  try {
    if (Status == 0) {
      var data = "Draft";
    }
    if (Status == 1) {
      var data = "Pending";
    }
    if (Status == 2) {
      var data = "Rejected";
    }
    if (Status == 3) {
      var data = "Correction";
    }
    if (Status == 4) {
      var data = "Approved";
    }
    const subMission = await subMissionTable.findOne({
      users_id: users_id,
    });
    const releseInfo = await releseInfoTable.findOne({
      users_id: users_id,
      releseInfo_id: releseInfo_id,
    });
    if (releseInfo) {
      var data = await releseInfoTable.update(
        { users_id: users_id,releseInfo_id: releseInfo_id, },
        {
          users_id: users_id,
          submission: data,
          createdAt: currentDate,
          Status: Number(Status),
        }
      );
    }
    return res.send({ status: "ok", data:releseInfo });
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
const releseInfoGetOne = async (req, res) => {
  try {
    const allUser = await releseInfoTable.findOne({
      users_id: req.params.users_id,
    });
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
    const allUser = await primaryArtistTable.find({
      users_id: req.params.users_id,
    });
    // console.log("allUser",allUser);
    return res.send({ status: "ok", data: allUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error occurred while fetching all data",
    });
  }
};
const featuringArtisttGet = async (req, res) => {
  try {
    const allUser = await featuringArtistTable.find({
      users_id: req.params.users_id,
    });
    // console.log("allUser",allUser);
    return res.send({
      status: "ok",
      data: allUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error occurred while fetching all data",
    });
  }
};
const submissionGet = async (req, res) => {
  try {
    const relese = await releseInfoTable.findOne({
      users_id: req.params.users_id,
    }).sort({ _id: -1}) ;
    console.log("relese", relese);
    const songs = await songsInfoTable.find({
      users_id: req.params.users_id,
    });
    // console.log("allUser", songs);
    return res.send({
      status: "ok",
      data: {
        users_id: relese?.users_id,
        Title: relese?.ReleaseTitle,
        Artist: relese?.PrimaryArtist,
        Label: relese?.LabelName,
        Genre: relese?.Genre,
        SubGenre: relese?.SubGenre,
        Songs: songs?.length,
        releseInfo_id: relese?.releseInfo_id,
        AudioDocument: relese?.ImageDocument,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error occurred while fetching all data",
    });
  }
};
const catalogsGet = async (req, res) => {
  try {
    const relese = await releseInfoTable.find({
      users_id: req.params.users_id,
    });
    console.log("relese", relese.createdAt);
    const songs = await songsInfoTable.find({
      users_id: req.params.users_id,
    });
    // console.log("songs",songs);
    // const subMission = await subMissionTable.findOne({
    //   users_id: req.params.users_id,
    // });
    const result = [];
    for (let i = 0; i < relese.length; i++) {
      var date = relese[i]?.createdAt;
      console.log(String(date).slice(3, 15));
      // for (let i = 0; i < songs.length; i++) {
      result.push({
        _id: relese[i]?._id,
        users_id: relese[i]?.users_id,
        Title: relese[i]?.ReleaseTitle,
        ArtistName: relese[i]?.PrimaryArtist,
        Label: relese[i]?.LabelName,
        Genre: relese[i]?.Genre,
        SubGenre: relese[i]?.SubGenre,
        releseInfo_id: relese[i]?.releseInfo_id,
        Tracks: songs.length,
        ImageDocument: relese[i]?.ImageDocument,
        action: relese[i]?.submission,
        Status: relese[i]?.Status,
        createdAt: String(date).slice(3, 15),
      });
    }
    // }
    // console.log("allUser", result);
    return res.send({
      status: "ok",
      result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error occurred while fetching all data",
    });
  }
};
const genreGet = async (req, res) => {
  try {
    const data = await genreTable.find({});

    // console.log("allUser", songs);
    return res.send({
      status: "ok",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error occurred while fetching all data",
    });
  }
};
const languageGet = async (req, res) => {
  try {
    const data = await languageTable.find({});

    // console.log("allUser", songs);
    return res.send({
      status: "ok",
      data,
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
  submissionPost,
  featuringArtisttGet,
  primaryArtistGet,
  featuringArtisttPost,
  releseInfoGetOne,
  releseInfoGetAll,
  songsInfoPost,
  platformPost,
  submissionGet,
  catalogsGet,
  genreGet,
  languageGet,
};
