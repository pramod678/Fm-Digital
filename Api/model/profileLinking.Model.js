const mongoose = require("mongoose");
const autoIncrement = require('mongoose-sequence')(mongoose);
const profileLinkingScehma = new mongoose.Schema(
  {
    users_id:{ type: Number, require:true },
    Selectrelease: { type: String, require:true },
    SelectAudio: { type: String, require:true },
    Selectplatform: { type: String, require:true },
    FecebookLink: { type: String, require:true },
    InstagramLink: { type: String, require:true },
    createdAt: { type : Date, default: Date.now }, 
    updatedAt: { type : Date, },
  },
  {
    collection: "profileLinking",
  }
);
profileLinkingScehma.plugin(autoIncrement, {inc_field: 'profileLinking_id'});
module.exports= mongoose.model("profileLinking", profileLinkingScehma);