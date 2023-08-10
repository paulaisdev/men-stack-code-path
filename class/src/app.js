import express from "express";
const app = express();

const cors = require("cors");
app.use(cors());

import db from "./config/database";
db.connect();

export default app;
