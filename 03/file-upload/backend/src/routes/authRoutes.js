import { Router } from "express";
import User from "../models/User.model.js";
import jwt from "jsonwebtoken";

const router = Router();

const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
}


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

        await user.save();

        const token = generateToken(user._id);

        return res.status(201).json({
            token, user: {
                id: user._id,
                userName: user.userName,
                email: user.email,
                profileImage: user.profileImage
            }
        })

    } catch (error) {
        console.log("Error in register", error);
        return res.status(500).json({ message: "Internal server error" })
    }
})


// Login 
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields is required" })
        }

        // check if user is existed 
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "user does not exist" })
        }

        const isPasswordCorrect = await user.comparePassword(password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "invalid credentials" })
        }

        const token = generateToken(user._id);

        return res.status(201).json({
            token, user: {
                id: user._id,
                userName: user.userName,
                email: user.email,
                profileImage: user.profileImage,
            },
        });


    } catch (error) {
        console.log("Error in Login", error);
        return res.status(500).json({ message: "Internal server error" })
    }
})

export default router;