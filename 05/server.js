import mongoose from "mongoose";
import express from "express";
import cors from "cors"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

// middleware 
const app = express();
app.use(express.json());
app.use(cors());

// database connection 
mongoose.connect("mongo-url", {
})


// model 
const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String
})
const User = mongoose.model("User", userSchema);

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})