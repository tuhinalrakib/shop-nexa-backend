import jwt from "jsonwebtoken";
import User from "../models/User.js";
import logger from "../utils/logger.js";

// ✅ Verify JWT (used for backend-issued tokens)
export const verifyJWT = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.cookies.token;
    if (!authHeader) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user data to request
    req.user = decoded;

    next();
  } catch (error) {
    logger.error(`JWT Auth Error: ${error.message}`);
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

// ✅ Check user role (Admin, Agent, or Regular User)
export const authorizeRoles = (...roles) => {
  return async (req, res, next) => {
    try {
      // Get user data (from decoded JWT)
      const user = await User.findById(req.user.id);

      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }

      if (!roles.includes(user.role)) {
        return res.status(403).json({
          success: false,
          message: `Access denied. Role '${user.role}' not authorized.`,
        });
      }

      next();
    } catch (error) {
      logger.error(`Authorization Error: ${error.message}`);
      res.status(500).json({ success: false, message: "Server error" });
    }
  };
};
