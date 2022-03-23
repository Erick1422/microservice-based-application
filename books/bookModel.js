const { model, Schema } = require('mongoose');

const Book = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    numberPages: {
        type: Number,
        required: false
    },
    publisher: {
        type: String,
        required: true
    }
})

module.exports = model('Book', Book);