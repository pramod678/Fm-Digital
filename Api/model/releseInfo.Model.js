const mongoose = require("mongoose");

const releseInfoScehma = new mongoose.Schema(
  {
    ReleaseType: String,
    ReleaseTitle: String,
    PrimaryArtist:{ type : [], default: ([]) },
    FeaturingArtist:{ type : [], default: ([]) },
    Genre:String,
    SubGenre:String,
    LabelName:String,
    ReleaseDate:String,
    PLine: String,
    CLine: String,
    UPCEAN: String,
    ImageDocument:String,
    createdAt: { type : Date, default: Date.now }, 
    updatedAt: { type : Date, },
  },
  {
    collection: "releseInfo",
  }
);

module.exports = mongoose.model("releseInfo", releseInfoScehma);
