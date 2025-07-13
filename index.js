import express from "express";
import { configDotenv } from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// Load .env file
configDotenv();
// connect database
connectDB();

const app = express();

const PORT = process.env.PORT;

// default middleware
app.use(express.json()); //This middleware parses incoming requests with JSON payloads (i.e., Content-Type: application/json) and makes the data available on req.body.
// app.use(express.urlencoded({ extended: true }));    //This middleware parses incoming URL-encoded data (e.g., from HTML form submissions using application/x-www-form-urlencoded) and also puts it on req.body.
app.use(cookieParser()); //This middleware parses cookies attached to the client request and makes them available on req.cookies.
app.use(
	cors({
		origin: process.env.CLIENT_URL,
		credentials: true, // This allows cookies to be sent with requests
	})
); // This middleware enables Cross-Origin Resource Sharing (CORS) for the server, allowing it to accept requests from different origins.

// Apis
app.use("/api/v1/user", userRoute);

app.get("/home", (_, res) => {
	res.status(200).json({
		sucess: true,
		message: "Welcome to LMS API",
	});
});

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
