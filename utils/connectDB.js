import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURI);
    console.log("MongoDB Connect")
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
