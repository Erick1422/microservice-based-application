const Book = require('./bookModel');
const { request, response } = require('express');
const bookCtrl = {};

bookCtrl.addBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();

        res.send("A new book created");

    } catch (error) {
        console.log(error);
    }
}

bookCtrl.listAllBooks = async (req, res) => {
    try {
        let books = await Book.find({});
        res.json(books);

    } catch (error) {
        console.log(error)
    }
}

bookCtrl.listBookById = async (req, res = response) => {
    try {
        const { id } = req.params;
        let book = await Book.findById(id);

        if (book) {
            res.json(book);
        } else {
            res.status(404).send('Book not found');
        }

    } catch (error) {
        console.log(error);
    }
}

bookCtrl.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        await Book.findByIdAndRemove(id);
        res.send('Book removed successfully');

    } catch (error) {
        console.log(error);
    }
}

module.exports = bookCtrl;