const Order = require('./orderModel');
const { request, response } = require('express');
const axios = require('axios')
const OrderCtrl = {};

OrderCtrl.addOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();

        res.send("A new order created");

    } catch (error) {
        console.log(error);
    }
}

OrderCtrl.listAllOrders = async (req, res) => {
    try {
        let orders = await Order.find({});
        res.json(orders);

    } catch (error) {
        console.log(error)
    }
}

OrderCtrl.listOrderById = async (req, res = response) => {
    try {
        const { id } = req.params;
        let order = await Order.findById(id);

        if (order) {
            const [customer, book] = await Promise.all([
                axios.get(`http://localhost:4001/customer/${order.customerId}`),
                axios.get(`http://localhost:4000/book/${order.bookId}`)
            ]);
            const { _id, customerId, bookId, __v, ...restData } = order._doc;
            
            res.json({
                order: restData,
                customer: customer.data.name,
                book: book.data.title
            });

        } else {
            res.status(404).send('order not found');
        }

    } catch (error) {
        console.log(error);
    }
}

OrderCtrl.deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        await Customer.findByIdAndRemove(id);
        res.send('Customer removed successfully');

    } catch (error) {
        console.log(error);
    }
}

module.exports = OrderCtrl;