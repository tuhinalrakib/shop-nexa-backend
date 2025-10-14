import Token from "../models/Token.js";
import User from "../models/User.js";
import asyncHandler from "express-async-handler"

export const verifyEmail = asyncHandler(async (req, res) => {
  const { uid, token } = req.query;

  if (!uid || !token) return res.status(400).json({ message: "Invalid verification link" });

  const storedToken = await Token.findOne({
    userId: uid,
    token,
    type: "emailVerification",
  });

  if (!storedToken) return res.status(400).json({ message: "Invalid or expired token" });
  if (storedToken.expiresAt < new Date()) {
    await storedToken.deleteOne();
    return res.status(400).json({ message: "Token expired. Please request a new verification link." });
  }

  await User.findByIdAndUpdate(uid, { isVerified: true });
  await storedToken.deleteOne();

  return res.status(200).json({ message: "Email verified successfully. You can now login." });
});
