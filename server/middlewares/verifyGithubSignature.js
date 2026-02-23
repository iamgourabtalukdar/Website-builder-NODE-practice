import crypto from "crypto";
import asyncHandler from "../utils/asyncHandler.js";

export const verifyGithubSignature = asyncHandler(async (req, res, next) => {
  const givenSignature = req.headers["x-hub-signature-256"];
  if (!givenSignature) {
    return res.status(403).json({
      message: "Invalid signature",
    });
  }
  const calculatedSignature =
    "sha256=" +
    crypto
      .createHmac("sha256", process.env.GITHUB_WEBHOOK_SECRET)
      .update(JSON.stringify(req.body))
      .digest("hex");
  if (givenSignature !== calculatedSignature) {
    return res.status(403).json({
      message: "Invalid signature",
    });
  }
  next();
});
