import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

connectDB();
const startServer = async () => {
  try {
    await connectDB(
      app.listen(PORT, () => {
        console.log(`server running on http://localhost:${PORT}`);
      })
    );
  } catch (error) {
    console.log("Error starting server", error);
  }
};

startServer();
