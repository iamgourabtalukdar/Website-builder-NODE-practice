import path from "path";
import asyncHandler from "../utils/asyncHandler.js";
import { spawn } from "child_process";
import { fileURLToPath } from "url";

export const deploy = asyncHandler(async (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const scriptPath = path.resolve(__dirname, "../../deploy/deploy-frontend.sh");
  const bashChildProcess = spawn("bash", [scriptPath]);

  bashChildProcess.stdout.on("data", (data) => {
    process.stdout.write(data);
  });
  bashChildProcess.stderr.on("data", (data) => {
    process.stderr.write(data);
    res.json({
      message: "Failed to deploy frontend",
    });
  });

  bashChildProcess.on("close", (code) => {
    if (code === 0) {
      console.log("Deployment completed successfully.");
    } else {
      console.error(`Deployment failed with exit code ${code}.`);
    }
    res.json({
      message: "OK",
    });
  });

  bashChildProcess.on("error", (err) => {
    console.error("Failed to start deployment process:", err);
    res.json({
      message: "Failed to start deployment process",
    });
  });
});
