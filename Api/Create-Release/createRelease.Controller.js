const releseInfoTable = require("../model/releseInfo.Model");
const featuringArtistTable = require("../model/featuringArtist.Model");
const primaryArtistTable = require("../model/primaryArtist.Model");
const songsInfoTable = require("../model/songsInfo.Model");
const moment = require( "moment-timezone");

const releseInfoPost = async (req, res) => {
  const {ReleaseType,ReleaseTitle,PrimaryArtist,FeaturingArtist,Genre,SubGenre,LabelName,ReleaseDate,PLine,CLine,UPCEAN,ImageDocument} = req.body;
  var currentDate = moment(new Date()).add(5.5, "h").toDate();
  console.log("PrimaryArtist",PrimaryArtist);
  try {
    const Data=  await releseInfoTable.create({
      ReleaseType:ReleaseType,
      ReleaseTitle:ReleaseTitle,
      PrimaryArtist:PrimaryArtist,
      FeaturingArtist:FeaturingArtist,
      Genre:Genre,
      SubGenre:SubGenre,
      LabelName:LabelName,
      ReleaseDate:ReleaseDate,
      PLine:PLine,
      CLine:CLine,
      UPCEAN:UPCEAN,
      ImageDocument:req.files["ImageDocument"]?.[0].filename ? "/releseInfo/" + req.files["ImageDocument"]?.[0].filename : "NULL",
      createdAt:currentDate
    });
    res.send({ status: "ok",Data });
  } catch (error) {
    console.log(error);
    res.send({message: error.message , status: "error" });
  }
};


const songsInfoPost = async (req, res) => {
  const {Trackversion,Instrumental,VersionSubtitle,Title,Primaryartist,FeaturingArtist,Author,Composer,Producer,Publisher,ISRC,Genre,Subgenre,ExplicitVersion,TrackTitleLanguage,LyricsLanguage,Lyrics,CallerTuneTiming,DistributeMusicvideo} = req.body;
  var currentDate = moment(new Date()).add(5.5, "h").toDate();
  // console.log("req.files",req.files["AudioDocument"]?.[0].filename);
  try {
    const Data=  await songsInfoTable.create({
      AudioDocument:req.files["AudioDocument"]?.[0].filename ? "/songsInfo/" + req.files["AudioDocument"]?.[0].filename : "NULL",
      Trackversion: Trackversion,
      Instrumental: Instrumental,
      Title: Title,
      VersionSubtitle: VersionSubtitle,
      Primaryartist:Primaryartist,
      FeaturingArtist:FeaturingArtist,
      Author:Author,
      Composer:Composer,
      Producer:Producer,
      Publisher:Publisher,
      ISRC:ISRC,
      Genre:Genre,
      Subgenre:Subgenre,
      ExplicitVersion:ExplicitVersion,
      TrackTitleLanguage:TrackTitleLanguage,
      LyricsLanguage:LyricsLanguage,
      Lyrics:Lyrics,
      CallerTuneTiming:CallerTuneTiming,
      DistributeMusicvideo:DistributeMusicvideo,
      createdAt:currentDate
    });
    res.send({ status: "ok",Data });
  } catch (error) {
    console.log(error);
    res.send({message: error.message , status: "error" });
  }
};
const primaryArtistPost = async (req, res) => {
  const {PrimaryArtist,FeaturingArtist} = req.body;
  var currentDate = moment(new Date()).add(5.5, "h").toDate();
  console.log("currentDate",currentDate);
  try {
 
    const Data=  await primaryArtistTable.create({
      PrimaryArtist:PrimaryArtist,
      createdAt: currentDate
    });
    res.send({ status: "ok",Data });
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
};
const featuringArtisttPost = async (req, res) => {
  const {PrimaryArtist,FeaturingArtist} = req.body;

  var currentDate = moment(new Date()).add(5.5, "h").toDate();
  console.log("currentDate",currentDate);
  try {
 
    const Data=  await featuringArtistTable.create({
      FeaturingArtist:FeaturingArtist,
      createdAt:currentDate,
      
    });
    res.send({ status: "ok",Data });
  } catch (error) {
    res.send({ status: "error" });
  }
};
const releseInfoGetAll= async (req, res) => {
    try {
      const allUser = await releseInfoTable.find({});
    //   console.log("allUser",allUser);
      res.send({ status: "ok", data: allUser });
    } catch (error) {
      console.log(error);
    }
  };
  const primaryArtistGet= async (req, res) => {
    try {
      const allUser = await releseInfoTable.findOne({ _id: req.params.id });
      console.log("allUser",allUser);
      res.send({ status: "ok",  Data: JSON.parse(allUser.PrimaryArtist) });
    } catch (error) {
      console.log(error);
    }
  };
  const featuringArtisttGet= async (req, res) => {
    try {
      const allUser = await releseInfoTable.findOne({ _id: req.params.id });
      console.log("allUser",allUser);
      res.send({ status: "ok",  Data: JSON.parse(allUser.FeaturingArtist) });
    } catch (error) {
      console.log(error);
    }
  };

module.exports = { releseInfoPost,primaryArtistPost,featuringArtisttGet,primaryArtistGet,featuringArtisttPost,releseInfoGetAll,songsInfoPost };
