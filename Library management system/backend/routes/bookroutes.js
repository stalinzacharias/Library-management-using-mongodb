const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

/* CREATE */
router.post("/", async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

/* READ ALL */
router.get("/", async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

/* READ BY ID */
router.get("/:id", async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.json(book);
});

/* UPDATE */
router.put("/:id", async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updatedBook);
});

/* DELETE */
router.delete("/:id", async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted successfully" });
});

module.exports = router;
