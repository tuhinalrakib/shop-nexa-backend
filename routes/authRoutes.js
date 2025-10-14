import express from "express";
import {
  registerUser,
  loginUser,
  getMe,
  refreshToken,
  logoutUser,
} from "../controllers/authController.js";
import { verifyJWT } from "../middleware/authMiddleware.js";
import { verifyEmail } from "../controllers/verifyController.js"
import { requestPasswordReset, resetPassword } from "../controllers/passwordController.js"

const router = express.Router();

// ✅ Register new user
router.post("/register", registerUser);

// ✅ Login user
router.post("/login", loginUser);

// Email verification
router.get("/verify-email", verifyEmail);

// Password reset
router.post("/request-reset", requestPasswordReset);
router.post("/reset-password", resetPassword);

// ✅ Refresh JWT token
router.get("/refresh", refreshToken);

// ✅ Get currently logged-in user
router.get("/me", verifyJWT, getMe);

// ✅ Logout user
router.post("/logout", verifyJWT, logoutUser);

export default router;
