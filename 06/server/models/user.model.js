import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "name is required"]
    },
    email: {
        type: String,
        require: [true, "email is required"],
        unique: true
    },
    password: {
        type: String,
        require: [true, "password is required"]
    },
    avatar: {
        type: String,
        default: ""
    },
    mobile: {
        type: Number,
        default: null
    },
    refreshToken: {
        type: String,
        default: ""
    },
    verifyEmail: {
        type: Boolean,
        default: false
    },
    lastLoginDate: {
        type: Date,
        default: ""
    },
    status: {
        type: String,
        enum: ["Active", "Inactive", "Suspended"],
        default: "Active"
    },
    addressDetails: [{
        type: mongoose.Schema.ObjectId,
        ref: "address"
    }],
    shoppingCart: [{
        type: mongoose.Schema.ObjectId,
        ref: "CartProduct"
    }],
    addressDetails: [{
        type: mongoose.Schema.ObjectId,
        ref: "address"
    }],
    orderHistory: [{
        type: mongoose.Schema.ObjectId,
        ref: "Order"
    }],
    forgotPasswordOTP: {
        type: String,
        default: null
    },
    forgotPasswordOTPExpire: {
        type: Date,
        default: ""
    },
    role: {
        type: String,
        enum: ["ADMIN", "USER"],
        default: "USER"
    }



}, { timestamps: true });


const UserModel = mongoose.model("User", userSchema);
export default UserModel;