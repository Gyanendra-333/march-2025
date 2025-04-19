import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import generateAccessToke from "../utils/generateAccessToken.js";
import generateRefreshToken from "../utils/generateRefreshToken.js";


// Register User 
export async function RegisterUser(request, response) {
    try {

        const { name, email, password } = request.body;
        if (!name || !email || !password) {
            return response.status(400).json({
                message: "name,email password is required",
                error: true,
                success: false
            })
        }

        const user = await UserModel.findOne({ email });
        if (user) {
            return response.status(400).json({
                message: "email already registered",
                error: true,
                success: false
            })
        }

        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        const payload = {
            name,
            email,
            password: hashPassword
        }

        const newUser = await UserModel(payload);
        const save = await newUser.save();

        return response.status(200).json({
            message: "user registered successfully",
            error: false,
            success: true,
            data: save
        })


    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}


// Verify Email 
export async function VerifyEmail(request, response) {
    try {
        const { code } = request.body;
        const user = await UserModel.findOne({ _id: code });
        if (!user) {
            return response.status(400).json({
                message: "Invalid user",
                error: true,
                success: false
            })
        }
        const updateUser = await UserModel.updateOne({ _id: code }, { verifyEmail: true });

        return response.status(200).json({
            message: "Email Verified Successfully",
            error: false,
            success: true
        });

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}

// Login User
export async function Login(request, response) {
    try {
        const { email, password } = request.body;

        if (!email || !password) {
            return response.status(400).json({
                message: "Email and Password is required",
                error: true,
                success: false
            })
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return response.status(400).json({
                message: "user not register",
                error: true,
                success: false
            })
        }

        const checkPassword = await bcryptjs.compare(password, user.password)
        if (!checkPassword) {
            return response.status(400).json({
                message: "password incorrect",
                error: true,
                success: false
            });
        }

        const accessToken = await generateAccessToke(user._id);
        const refreshToken = await generateRefreshToken(user._id);

        const cookiesOption = {
            httpOnly: true,
            secure: true,
            sameSite: "None"
        }

        response.cookie("accessToken", accessToken, cookiesOption);
        response.cookie("refreshToken", refreshToken, cookiesOption);

        return response.status(200).json({
            message: "User Login Successfully",
            error: false,
            success: true,
            data: {
                accessToken,
                refreshToken
            }
        })


    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}

// Logout 
export async function Logout(request, response) {
    try {
        const userid = request.userId; // this userId comming from auth middleware

        const cookiesOption = {
            httpOnly: true,
            secure: true,
            sameSite: "None"
        }

        response.clearCookie("accessToken", cookiesOption);
        response.clearCookie("refreshToken", cookiesOption);

        const removeRefreshToken = await UserModel.findByIdAndUpdate(
            userid,
            { refreshToken: "" }
        )

        return response.status(200).json({
            message: "Logout Successfully",
            error: false,
            success: true
        })

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}