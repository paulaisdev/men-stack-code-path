const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("movie", movieSchema);
