import express from "express";
import { configDotenv } from "dotenv";

// Load .env file
configDotenv();

const app = express();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
