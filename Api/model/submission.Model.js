const mongoose = require("mongoose");

const autoIncrement = require('mongoose-sequence')(mongoose);
const platformScehma = new mongoose.Schema(
  {
    users_id:{ type: Number, require:true },
    submission:{ type : String },
    createdAt: { type : Date, default: Date.now }, 
    updatedAt: { type : Date, },
  },
  {
    collection: "submission",
  }
);
// primaryArtistScehma.plugin(autoIncrement);
platformScehma.plugin(autoIncrement, {inc_field: 'platform_id'});

module.exports = mongoose.model("platform", platformScehma);
