const mongoose = require("mongoose");
const autoIncrement = require('mongoose-sequence')(mongoose);

const releseInfoScehma = new mongoose.Schema(
  {
    users_id:{ type: Number, require:true },
    ReleaseType: {type: String,
      required: true},
    ReleaseTitle:  {type: String,
      required: true},
    PrimaryArtist:{ type : [], default: ([]) },
    FeaturingArtist:{ type : [], default: ([]) },
    Genre: {type: String,
      required: false},
    SubGenre: {type: String,
      required: true},
    LabelName: {type: String,
      required: true},
    ReleaseDate: {type: String,
      required: true},
    PLine:  {type: String,
      required: true},
    CLine:  {type: String,
      required: true},
    UPCEAN:  {type: String,
      required: true},
    ImageDocument: {type: String,
      required: true},
    createdAt: { type : Date, default: Date.now }, 
    updatedAt: { type : Date, },
  },
  {
    collection: "releseInfo",
  }
);

releseInfoScehma.plugin(autoIncrement, {inc_field: 'releseInfo_id'});
module.exports = mongoose.model("releseInfo", releseInfoScehma);
