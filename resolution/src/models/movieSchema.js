import mongoose from "mongoose";

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

export default mongoose.model("movie", movieSchema);
