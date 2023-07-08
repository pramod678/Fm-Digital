const mongoose = require("mongoose");

const autoIncrement = require('mongoose-sequence')(mongoose);
const primaryArtistScehma = new mongoose.Schema(
  {
    users_id:{ type: Number, require:true,unqiue : true },
    PrimaryArtist:String,
    AppleId:String,
    SpotifyId:String,
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
