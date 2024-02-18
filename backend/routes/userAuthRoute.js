import express from "express";
import { userSignUp } from "../controllers/userAuthController.js";

const router = express.Router();

router.post("/signup", userSignUp);

export default router;
