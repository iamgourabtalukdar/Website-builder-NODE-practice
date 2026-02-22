import path from "path";
import asyncHandler from "../utils/asyncHandler.js";
import { spawn } from "child_process";
import { fileURLToPath } from "url";

export const deploy = asyncHandler(async (req, res) => {
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
  res.json({
    message: "OK",
  });
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const scriptPath = path.resolve(__dirname, "../../deploy/deploy-frontend.sh");
  const bashChildProcess = spawn("bash", [scriptPath]);

  bashChildProcess.stdout.on("data", (data) => {
    process.stdout.write(data);
  });
  bashChildProcess.stderr.on("data", (data) => {
    process.stderr.write(data);
  });

  bashChildProcess.on("close", (code) => {
    if (code === 0) {
      console.log("Deployment completed successfully.");
    } else {
      console.error(`Deployment failed with exit code ${code}.`);
    }
  });

  bashChildProcess.on("error", (err) => {
    console.error("Failed to start deployment process:", err);
  });
});
