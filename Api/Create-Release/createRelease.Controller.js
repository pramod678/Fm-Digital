const releseInfoTable = require("../model/releseInfo.Model");
const featuringArtistTable = require("../model/featuringArtist.Model");
const primaryArtistTable = require("../model/primaryArtist.Model");
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
      ImageDocument:ImageDocument,
      createdAt:currentDate
    });
    res.send({ status: "ok",Data });
  } catch (error) {
    res.send({ status: "error" });
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
module.exports = { releseInfoPost,primaryArtistPost,featuringArtisttPost,releseInfoGetAll };
