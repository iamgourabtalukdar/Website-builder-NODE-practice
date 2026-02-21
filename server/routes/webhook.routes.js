import express from "express";
import { deploy } from "../controllers/webhook.controller.js";

const router = express.Router();

router.post("/github", deploy);

export default router;
