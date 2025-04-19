import jwt from "jsonwebtoken"

const auth = (request, response, next) => {
    try {

        const token = request.cookies.accessToken || request?.header?.authorization?.split("")[1]
        if (!token) {
            return response.status(400).json({
                message: "Authorization failed",
                error: true,
                success: false
            })
        }
        const decode = jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN)
        if (!decode) {
            return response.status(400).json({
                message: "Unauthorized user",
                error: true,
                success: false
            })
        }

        request.userId = decode.id;


    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
    next();
}

export default auth;