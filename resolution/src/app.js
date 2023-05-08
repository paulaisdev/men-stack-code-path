import express from "express";
const app = express();

require("dotenv-safe").config();

import cors from "cors";
app.use(cors());

app.use(express.json());

import movies from "./routes/moviesRoutes.js";

app.use("/movies", movies);

export default app;
