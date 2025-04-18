import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs"



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
        return response.status(500).json({ message: error.message || error, error: true, success: false });
    }
}