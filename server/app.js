import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

// Middlewares
import errorHandler from "./middlewares/errorHandler.js";

// Routes
import webhookRoutes from "./routes/webhook.routes.js";

dotenv.config();

const app = express();

// CORS Setup
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

// Parsers
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// Health Check Route
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "DnD Website Builder Backend is Running 🚀",
  });
});

// Webhooks
app.use("/api/webhook", webhookRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: {
      type: "NOT_FOUND",
      message: "Route not found",
    },
  });
});

// Global Error Handler
app.use(errorHandler);

// Server Start
async function startServer() {
  try {
    // await connectToDB();

    const PORT = process.env.PORT || 5000;
    const HOST = process.env.HOST || "localhost";

    app.listen(PORT, HOST, () => {
      console.log(`🚀 Server is running at http://${HOST}:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
