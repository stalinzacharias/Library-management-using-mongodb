const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        unique: true
    },
    publishedYear: Number,
    available: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model("Book", bookSchema);
