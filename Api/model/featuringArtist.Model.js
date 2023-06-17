const mongoose = require("mongoose");

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

module.exports = mongoose.model("featuringArtist", featuringArtistScehma);