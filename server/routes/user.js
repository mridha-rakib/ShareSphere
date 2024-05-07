import express from "express";
import { login, register } from "../controllers/authController.js";
import {
  addRemoveFriend,
  getUser,
  getUserFriends,
} from "../controllers/usersController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

/* AUTH */
router.post("/register", register);
router.post("/login", login);

/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
