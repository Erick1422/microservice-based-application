const { model, Schema } = require('mongoose');

const Order = new Schema({
    customerId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    bookId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    initialDate: {
        type: Date,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    }
});

module.exports = model('Order', Order);