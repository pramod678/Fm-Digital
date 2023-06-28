const youtubeClaimsTable = require("../model/youtubeClaims.Model");
const vprofileLinkingTable = require("../model/profileLinking.Model");
const moment = require( "moment-timezone");

const youtubeClaimsPost = async (req, res) => {
  const {users_id,Selectrelease,SelectAudio,Selectplatform,SelectPolicy,PasteURL} = req.body;
  var currentDate = moment(new Date()).add(5.5, "h").toDate();
  console.log("currentDate",currentDate);
  try {
// console.log(">>>>-----",req.body);
    const Data=  await youtubeClaimsTable.create({
      users_id:users_id,
      Selectrelease: Selectrelease,
      SelectAudio:SelectAudio,
      Selectplatform: Selectplatform,
      SelectPolicy: SelectPolicy,
      PasteURL: PasteURL,
      createdAt:currentDate, 
    });
    res.send({ status: "ok",Data });
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
};

const profileLinkingPost = async (req, res) => {
  const {users_id,Selectrelease,SelectAudio,Selectplatform,FecebookLink,InstagramLink} = req.body;
  var currentDate = moment(new Date()).add(5.5, "h").toDate();
  console.log("currentDate",currentDate);
  try {
// console.log(">>>>-----",req.body);
    const Data=  await vprofileLinkingTable.create({
      users_id:users_id,
      Selectrelease: Selectrelease,
      SelectAudio: SelectAudio,
      Selectplatform: Selectplatform,
      FecebookLink: FecebookLink,
      InstagramLink: InstagramLink,
      createdAt: currentDate
    });
    res.send({ status: "ok",Data });
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
};

module.exports = { youtubeClaimsPost,profileLinkingPost};
