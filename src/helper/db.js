// import { User } from "../models/user";
import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });
    console.log("DB connected ...");

    console.log("connect with host", connection.host);
  } catch (error) {
    console.log("failed to connect to database");
    console.log(error);
  }
};
