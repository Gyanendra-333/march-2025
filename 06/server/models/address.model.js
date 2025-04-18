import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    addressLine: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    state: {
        type: String,
        default: ""
    },
    pinCode: {
        type: String,
    },
    country: {
        type: String
    },
    mobile: {
        type: Number,
        default: null
    },
    status: {
        type: Boolean,
        default: true
    }


}, { timestamps: true });

const AddressModel = mongoose.model("Address", addressSchema);

export default AddressModel;