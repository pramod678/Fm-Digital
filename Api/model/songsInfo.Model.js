const mongoose = require("mongoose");
const autoIncrement = require('mongoose-sequence')(mongoose);
const songsInfoScehma = new mongoose.Schema(
  {
    AudioDocument: { type : [], default: ([]) },
    Trackversion: String,
    Instrumental: String,
    Title: String,
    VersionSubtitle: String,
    Primaryartist:String,
    FeaturingArtist:String,
    Author:String,
    Composer:String,
    Producer:String,
    Publisher:String,
    ISRC:String,
    Genre:String,
    Subgenre:String,
    ExplicitVersion:String,
    TrackTitleLanguage:String,
    LyricsLanguage:String,
    Lyrics:String,
    CallerTuneTiming:String,
    DistributeMusicvideo:String,
    createdAt: { type : Date, default: Date.now }, 
    updatedAt: { type : Date, },
  },
  {
    collection: "songsInfo",
  }
);
songsInfoScehma.plugin(autoIncrement, {inc_field: 'songsInfo_id'});
module.exports= mongoose.model("songsInfo", songsInfoScehma);
