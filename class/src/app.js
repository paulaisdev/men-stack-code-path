import express from "express";
const app = express();

require("dotenv-safe").config();

const cors = require("cors");
app.use(cors());

import db from "./config/database";
import userRoutes from "./routes/userRoutes";

db.connect();

app.use(express.json());
app.use("/users", userRoutes);

export default app;
