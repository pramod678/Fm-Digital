const mongoose = require("mongoose");
const autoIncrement = require('mongoose-sequence')(mongoose);
const featuringArtistScehma = new mongoose.Schema(
  {

    FeaturingArtist:String,
    createdAt: { type : Date, default: Date.now }, 
    updatedAt: { type : Date, },

  },
  {
    collection: "featuringArtist",
  }
);
featuringArtistScehma.plugin(autoIncrement, {inc_field: 'featuringArtist_id'});
module.exports = mongoose.model("featuringArtist", featuringArtistScehma);