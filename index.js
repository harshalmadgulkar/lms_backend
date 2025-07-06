import express from "express";
import { configDotenv } from "dotenv";
import connectDB from "./database/db.js";

// Load .env file
configDotenv();
// connect database
connectDB();

const app = express();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
