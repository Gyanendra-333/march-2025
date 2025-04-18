import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


if (!process.env.MONGODB_URL) {
    throw new Error("please provide mongodb url");
}


async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database Connected Successfully");

    } catch (error) {
        console.log("mongodb connection error", error);
        process.exit(1);
    }
}

export default connectDB;