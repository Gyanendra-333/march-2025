import { Router } from "express";
import cloudinary from "../utils/cloudinary.js";
import protectRouteMiddleware from "../middleware/auth.middleware.js";
import Book from "../models/Books.model.js";


const router = Router();


// create books 
router.post("/create", protectRouteMiddleware, async (req, res) => {
    try {
        const { title, cpation, rating, image } = req.body;
        if (!title || !cpation || !rating || !image) {
            return res.status(400).json({ messag: "all fields is required" });
        }

        // upload Image on clodinary 
        const uploadResponse = await cloudinary.uploader.upload(image);
        const imageUrl = uploadResponse.secure_url;

        // save to database
        const newBook = new Book({
            title,
            cpation,
            rating,
            image: imageUrl,
            user: req.user._id
        });

        await newBook.save();
        return res.status(200).json(newBook);

    } catch (error) {
        console.log("Error books create", error);
        return res.status(500).json({ messag: "internal server error" });
    }
});

// get all books 
router.get("/get", async (req, res) => {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 5;
        const skip = (page - 1) * limit;

        const books = await Book.find().sort({ createdAt: -1 })
            .skip(skip).limit(limit).populate("user", "userName, profileImage");
        const totalBooks = await Book.countDocuments();

        res.send({
            books,
            currentPage: page,
            totalBooks,
            totalPages: Math.ceil(totalBooks / limit)
        });

    } catch (error) {
        console.log("error fetching books", error);
        return res.status(500).json({ message: "internal server error" });
    }
})

// get recommended 
router.get("/user", async (req, res) => {
    try {
        const book = await Book.find({ user: req.user._id }).sort({ createdAt: -1 });
        res.json(book);

    } catch (error) {
        console.log("get user books error ", error);
        return res.status(500).json({ message: "internal server error" });
    }
});

// Delete Books 
router.delete("/delete/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "book not found" })
        }
        if (book.user.toString() !== req.user._id.toString()) {
            return res.status(400).json({ message: "unauthorized user" })
        }

        // delete image from cloduinary 
        if (book.image && book.image.includes("cloudinary")) {
            try {
                const publicId = book.image.split("/").pop().split(".")[0];
                await cloudinary.uploader.destroy(publicId);

            } catch (deleteError) {
                console.log("delete image from clodinary error", deleteError);
            }
        }

        await book.deleteOne();
        res.json({ messag: "book deleted successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
})


export default router;