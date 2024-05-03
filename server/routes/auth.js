import express from "express";
import {
  loginController,
  registrationController,
} from "../controllers/auth.js";

const router = express.Router();

/* AUTH */
router.post("/auth/register");
router.post("/login", login);

/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
