import express from "express";
import { deploy } from "../controllers/webhook.controller.js";
import { verifyGithubSignature } from "../middlewares/verifyGithubSignature.js";

const router = express.Router();

router.post("/github", verifyGithubSignature, deploy);

export default router;
