require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Cadence API is running",
  });
});

app.listen(PORT, () => {
  console.log(`Cadence backend running on port ${PORT}`);
});