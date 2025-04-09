import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
import "dotenv/config";


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});



const uploadFileOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
    }
}

export default uploadFileOnCloudinary;