import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        const dbConnect = await mongoose.connect(process.env.MONGO_URL)
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log("Error Conecting Database", error);
        process.exit(1);
    }
}