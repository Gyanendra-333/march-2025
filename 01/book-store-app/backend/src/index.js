import express from "express";
import "dotenv/config"
import authRoutes from "./routes/authRoutes.js"
import { connectDB } from "./db/db.js";

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    connectDB().then(() => {
        console.log(`server is Running ${PORT} `)
    }); 
})