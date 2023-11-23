import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  resetPassword,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

router.route("/profile").put(protect, updateUserProfile).post(resetPassword);

export default router;
