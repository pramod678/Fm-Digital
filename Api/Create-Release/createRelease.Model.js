const mongoose = require("mongoose");

const releseInfoScehma = new mongoose.Schema(
  {
    ReleaseType: String,
    ReleaseTitle: String,
    PrimaryArtist:String,
    FeaturingArtist:String,
    Genre:String,
    SubGenre:String,
    LabelName:String,
    ReleaseDate:String,
    PLine: String,
    CLine: String,
    UPCEAN: String,
    ImageDocument:String
    // email: { type: String, unique: true },
  },
  {
    collection: "releseInfo",
  }
);

module.exports = mongoose.model("releseInfo", releseInfoScehma);
