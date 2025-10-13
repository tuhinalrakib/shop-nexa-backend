import { createClient } from "redis";
import logger from "../utils/logger.js";

let redisClient;

export const initRedis = async () => {
  redisClient = createClient({ url: process.env.REDIS_URL });
  redisClient.on("error", (err) => logger.error(`❌ Redis Error: ${err}`));
  await redisClient.connect();
  logger.info("✅ Redis Connected");
};

export const getRedisClient = () => redisClient;