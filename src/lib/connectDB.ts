import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.info("DB connected✅");
  } catch (error: any) {
    console.error("Failed to connectDB", error?.message);
  }
};

export default connectDB;
