import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import eventRoutes from "./routes/eventRoutes.js";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/events", eventRoutes);
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = 8000;
// Connect DB
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});