import jwt from "jsonwebtoken"

const generateAccessToke = async (userId) => {
    const token = await jwt.sign(
        { id: userId },
        process.env.SECRET_KEY_ACCESS_TOKEN,
        { expiresIn: "3d" }
    )
    return token;
}

export default generateAccessToke;