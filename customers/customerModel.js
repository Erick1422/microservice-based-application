const { model, Schema } = require('mongoose');

const Customer = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

module.exports = model('Customer', Customer);