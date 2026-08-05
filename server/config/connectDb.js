import mongoose from "mongoose";
import "./env.js";

const getDatabaseErrorMessage = (error) => {
  if (error?.code === 8000 || /authentication failed/i.test(error?.message ?? "")) {
    return "MongoDB authentication failed. Update MONGODB_URL with valid Atlas database-user credentials.";
  }

  return `MongoDB connection failed: ${error?.message ?? "Unknown error"}`;
};

const connectDb = async () => {
  const mongoUrl = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/aimockinterview"

  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoUrl);
    console.log("DataBase Connected");
  } catch (error) {
    throw new Error(getDatabaseErrorMessage(error));
  }
};

export default connectDb
