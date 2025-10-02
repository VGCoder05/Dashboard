const express = require("express");
const cookieParser = require('cookie-parser');
const connectDB = require("./db/db")
const cors = require("cors");

// --- Routes ---
const authRoutes = require("./routes/auth.routes")

// --- Middleware ---
const errorHandler = require("./middleware/errorMiddleware")

const app = express()
connectDB();


app.use(cors())
app.use(express.json())
app.use(cookieParser());

// --- ROUTES ---
// --- For Authentication ---
app.use("/auth", authRoutes);

// --- ERROR HANDLER MIDDLEWARE ---
app.use(errorHandler);

module.exports = app;
