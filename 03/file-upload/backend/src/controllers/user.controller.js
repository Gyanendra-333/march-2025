import { asyncHandler } from "../utils/asyncHandler.js";



const Register = asyncHandler(async (req, res) => {
    return res.status(200).json({ message: "create register" })
});

export { Register };