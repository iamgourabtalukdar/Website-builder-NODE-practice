import mongoose from "mongoose";

async function connectToDB() {
  try {
    const MONGO_URI =
      process.env.MONGO_URI || "mongodb://localhost:27017/DnDApp";
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
}

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  console.log("Disconnected from MongoDB");
  process.exit(0);
});

export default connectToDB;
