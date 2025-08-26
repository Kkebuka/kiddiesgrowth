import dotenv from "dotenv";
import app from ".app.js";
import connectDB from "./config/db.js";

dotenv.config();

const PORT = 5000 || process.env.PORT;

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
