const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose);
const languageScehma = new mongoose.Schema(
  {
    language: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
  },
  {
    collection: "language",
  }
);
languageScehma.plugin(autoIncrement, { inc_field: "language_id" });
module.exports = mongoose.model("language", languageScehma);
