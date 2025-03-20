import express from "express";
import "dotenv/config";
import cors from "cors";
import { connectDB } from "./db/db.js";
import authRoutes from "./routes/authRoutes.js"
import booksRoute from "./routes/booksRoute.js"

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/books", booksRoute);


app.listen(PORT, () => {
    connectDB().then(() => {
        console.log(`server is Running ${PORT} `)
    });
})