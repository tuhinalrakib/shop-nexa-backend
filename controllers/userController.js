import User from "../models/User.js";

// @desc Get All Users (Admin Only)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password -refreshToken");
    return res.json(users);
  } catch {
    return res.status(500).json({ message: "Failed to fetch users" });
  }
};

// @desc Get User By ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password -refreshToken");
    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json(user);
  } catch {
    return res.status(500).json({ message: "Failed to fetch user" });
  }
};

// @desc Update User
export const updateUser = async (req, res) => {
  try {
    const { name, avatar, role } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, avatar, role },
      { new: true }
    ).select("-password -refreshToken");

    return res.json(updatedUser);
  } catch {
    return res.status(500).json({ message: "Update failed" });
  }
};

// @desc Delete User (Admin Only)
export const deleteUser = async (req, res) => {
  try {
    const exists = await User.findById(req.params.id);
    if (!exists) return res.status(404).json({ message: "User not found" });

    await User.findByIdAndDelete(req.params.id);
    return res.json({ message: "User removed successfully" });
  } catch {
    return res.status(500).json({ message: "Delete failed" });
  }
};
