const releseInfoTable = require("./createRelease.Model");
//  const releseInfo = async (req,res) =>{
//     try {

//     } catch (error) {
//         console.log(error);
//     }
//  }
const releseInfoPost = async (req, res) => {
  const {ReleaseType,ReleaseTitle,PrimaryArtist,FeaturingArtist,Genre,SubGenre,LabelName,ReleaseDate,PLine,CLine,UPCEAN,ImageDocument} = req.body;

  // const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    //   const oldUser = await releseInfoTable.findOne({ email });

    //   if (oldUser) {
    //     return res.json({ error: "User Exists" });
    //   }
    const Data=  await releseInfoTable.create({
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
module.exports = { releseInfoPost,releseInfoGetAll };
