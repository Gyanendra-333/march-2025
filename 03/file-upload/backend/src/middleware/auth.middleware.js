import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

const protectRouteMiddleware = async (req, res, next) => {
    try {
        // get toekn 
        const token = req.header("Authorization").replace("Bearer ", "");
        if (!token) {
            return res.status(400).json({ message: "not Authorized " })
        }
        // verify token 
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        // find user 
        const user = await User.findById(decode.userId).select("-password");
        if (!user) {
            return res.status(400).json({ message: "token is not valid" })
        }
        req.user = user;
        next();

    } catch (error) {
        console.log("error of route middleware", error)
        return res.status(500).json({ message: "internel server error" });
    }

}
export default protectRouteMiddleware;