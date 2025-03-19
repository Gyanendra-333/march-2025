import express, { Router } from "express";
import User from "../models/User.model.js";

const router = Router();


// Register 
router.post("/register", async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        if (!userName || !email || !password) {
            return res.status(400).json({ message: "All fields is required" })
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "password length must be atleast 6 " })
        }
        if (userName.length < 3) {
            return res.status(400).json({ message: "username length must be atleast 3 " })
        }
        const existingUser = await User.findOne({ $or: [{ email }, { userName }] });
        if (existingUser) {
            return res.status(400).json({ message: "username or email already exist " })
        }

        const profileImage = `https://api.dicebear.com/9.x/adventurer/svg?seed=${userName}`

        const user = new User({
            userName,
            email,
            password,
            profileImage: profileImage
        })

    } catch (error) {
        console.log(error);
    }
})


// Login 
router.post("/login", async (req, res) => {
    res.send("login")
})

export default router;