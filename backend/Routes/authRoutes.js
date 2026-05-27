import express from "express";
import { signup, login, profile } from "../Controller/authController.js";
import authMiddleware from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

//protected router
router.get("/profile", authMiddleware, profile);

export default router;
