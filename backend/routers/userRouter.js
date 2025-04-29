import express from "express";
import { signup, verifyState } from "../controllers/userController.js";
const router = express.Router();

router.get("/auth/verify", verifyState);
router.post("/auth/signup", signup);

export default router;
