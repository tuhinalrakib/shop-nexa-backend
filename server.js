import dotenv from "dotenv";
import http from "http";
import app from "./app.js";
import connectDB from "./config/db.js";
import { initRedis } from "./config/redis.js";
import logger from "./utils/logger.js";

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;

// Create HTTP server (useful for WebSocket integration later)
const server = http.createServer(app);

// Connect MongoDB
connectDB();

// Connect Redis
initRedis();

// Handle server listening
server.listen(PORT, () => {
  logger.info(`✅ Server running in ${process.env.NODE_ENV} mode on port http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  logger.error(`💥 Unhandled Rejection: ${err.message}`);
  server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  logger.error(`💣 Uncaught Exception: ${err.message}`);
  process.exit(1);
});
