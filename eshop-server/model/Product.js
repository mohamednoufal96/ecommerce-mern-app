const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        categories: { type: Array },
        size: {
            type: Array,
            required: true,
        },
        color: {
            type: Array,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        inStock: {
            type: Boolean,
            default: true,
        },
    },
    { timeStamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
