const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose);
const genreScehma = new mongoose.Schema(
  {
    genre: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
  },
  {
    collection: "genre",
  }
);
genreScehma.plugin(autoIncrement, { inc_field: "genre_id" });
module.exports = mongoose.model("genre", genreScehma);
