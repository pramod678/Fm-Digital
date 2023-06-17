const mongoose = require("mongoose");

const primaryArtistScehma = new mongoose.Schema(
  {

    PrimaryArtist:{ type : [], default: ([]) },
    createdAt: { type : Date, default: Date.now }, 
    updatedAt: { type : Date, },
  },
  {
    collection: "primaryArtist",
  }
);

module.exports = mongoose.model("primaryArtist", primaryArtistScehma);
