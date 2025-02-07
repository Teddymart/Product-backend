const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please enter name"]
        },

        quantity: {
            type: String,
            required: true,
            default: 0,
        },

        price: {
            type: String,
            required: true,
            default: 0,
        },

        image: {
            type: String,
            required: false,
        },

        phoneNumber: {
            type: Number,
            required: true,
        },
    },
    {
        Timestamp: true,
    }
);

const product = mongoose.model("Product", ProductSchema);
module.exports = product;