const mongoose = require("mongoose");

const autoIncrement = require('mongoose-sequence')(mongoose);
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
// primaryArtistScehma.plugin(autoIncrement);
primaryArtistScehma.plugin(autoIncrement, {inc_field: 'primaryArtist_id'});

module.exports = mongoose.model("primaryArtist", primaryArtistScehma);
