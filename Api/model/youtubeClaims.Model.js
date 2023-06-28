const mongoose = require("mongoose");
const autoIncrement = require('mongoose-sequence')(mongoose);
const youtubeClaimsScehma = new mongoose.Schema(
  {
    users_id:{ type: Number, require:true },
    Selectrelease: { type: String, require:true },
    SelectAudio: { type: String, require:true },
    Selectplatform: { type: String, require:true },
    SelectPolicy: { type: String, require:true },
    PasteURL: { type: String, require:true },
    createdAt: { type : Date, default: Date.now }, 
    updatedAt: { type : Date, },
    
  },
  {
    collection: "youtubeClaims",
  }
);
youtubeClaimsScehma.plugin(autoIncrement, {inc_field: 'youtubeClaims_id'});
module.exports= mongoose.model("youtubeClaims", youtubeClaimsScehma);