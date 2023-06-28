const mongoose = require("mongoose");

const autoIncrement = require('mongoose-sequence')(mongoose);
const platformScehma = new mongoose.Schema(
  {
    users_id:{ type: Number, require:true },
    Audio:{ type : [], default: ([]) },
    CRBT:{ type : [], default: ([]) },
    VideoPlatform:{ type : [], default: ([]) },
    createdAt: { type : Date, default: Date.now }, 
    updatedAt: { type : Date, },
  },
  {
    collection: "platform",
  }
);
// primaryArtistScehma.plugin(autoIncrement);
platformScehma.plugin(autoIncrement, {inc_field: 'platform_id'});

module.exports = mongoose.model("platform", platformScehma);
