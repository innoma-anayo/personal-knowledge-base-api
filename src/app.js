require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

// Middleware
app.use(express.json());

// Health check
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Personal Knowledge Base API is running"
    });
});

// API routes
app.use("/api/notes", noteRoutes);

// Logger
app.use(logger);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});

// Connect to MongoDB
connectDB();