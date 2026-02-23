import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import asyncHandler from "../utils/asyncHandler.js";

function executeBashScript(scriptPath) {
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
}
export const deploy = asyncHandler(async (req, res) => {
  res.json({
    message: "OK",
  });

  const commits = req.body.commits;

  let clientChanged = false;
  let serverChanged = false;

  for (const commit of commits) {
    const files = [...commit.added, ...commit.modified, ...commit.removed];

    for (const file of files) {
      if (file.startsWith("client/")) clientChanged = true;
      if (file.startsWith("server/")) serverChanged = true;
      if (clientChanged && serverChanged) break;
    }
    if (clientChanged && serverChanged) break;
  }

  if (!clientChanged && !serverChanged) {
    console.log("No deployable changes detected.");
  }

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  if (clientChanged) {
    console.log("Client changed → Deploying frontend...");
    const scriptPath = path.resolve(
      __dirname,
      "../../deploy/deploy-frontend.sh",
    );
    executeBashScript(scriptPath);
  }

  if (serverChanged) {
    console.log("Server changed → Deploying backend...");
    const scriptPath = path.resolve(
      __dirname,
      "../../deploy/deploy-backend.sh",
    );
    executeBashScript(scriptPath);
  }
});
