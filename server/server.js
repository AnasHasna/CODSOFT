import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import connectToDB from "./config/connectToDB.js";

// configs
dotenv.config();
connectToDB();
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(cookieParser());

// routes

// error middlewares
app.use(notFound);
app.use(errorHandler);

// server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
