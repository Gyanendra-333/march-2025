import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: Array,
        default: []
    },
    category: [{
        type: mongoose.Schema.ObjectId,
        ref: "Category"
    }],
    SubCategory: [{
        type: mongoose.Schema.ObjectId,
        ref: "subCategory"
    }],
    unit: {
        type: String,
        default: ""
    },
    stock: {
        type: Number,
        default: null
    },
    price: {
        type: Number,
        default: null
    },
    discount: {
        type: Number,
        default: null
    },
    description: {
        type: String,
        default: ""
    },
    moreDetails: {
        type: Object,
        default: {}
    },
    publish: {
        type: Boolean,
        default: true
    }


}, { timestamps: true });

const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;