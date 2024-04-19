const mongoose = require('mongoose');

// Define the schema for the product
const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        required: true,
        enum:['spicy','sweet','sour']
    },
    is_drink: {
        type: Boolean,
        required: true
    },
    ingredients: {
        type: [String],
        default:[]
    },
    num_sales: {
        type: Number,
        default: 0
    }
});

// Create a model based on the schema
const Product = mongoose.model('Product', menuItemSchema);

module.exports = Product;