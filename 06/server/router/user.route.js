import express from "express"
import { Login, Logout, RegisterUser, VerifyEmail } from "../controller/user.controller.js";
import auth from "../middleware/auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/register", RegisterUser);
userRouter.post("/verifyEmail", VerifyEmail);
userRouter.post("/login", Login);
userRouter.get("/logout", auth, Logout);

export default userRouter; 