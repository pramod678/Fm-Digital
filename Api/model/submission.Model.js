const mongoose = require("mongoose");

const autoIncrement = require('mongoose-sequence')(mongoose);
const submissionScehma = new mongoose.Schema(
  {
    users_id:{ type: Number, require:true,unqiue : true },
    submission:{ type : String },
    Status: { type: Number,
    createdAt: { type : Date, default: Date.now }, 
    updatedAt: { type : Date, },
    
    default: 0},
  },
  {
    collection: "submission",
  }
);
// primaryArtistScehma.plugin(autoIncrement);
submissionScehma.plugin(autoIncrement, {inc_field: 'submission_id'});

module.exports = mongoose.model("submission", submissionScehma);
