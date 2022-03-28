const Customer = require('./customerModel');
const { request, response } = require('express');
const customerCtrl = {};

customerCtrl.addCustomer = async (req, res) => {
    try {
        const customer = new Customer(req.body);
        await customer.save();

        res.send("A new customer created");

    } catch (error) {
        console.log(error);
    }
}

customerCtrl.listAllCustomers = async (req, res) => {
    try {
        let customers = await Customer.find({});
        res.json(customers);

    } catch (error) {
        console.log(error)
    }
}

customerCtrl.listCustomerById = async (req, res = response) => {
    try {
        const { id } = req.params;
        let customer = await Customer.findById(id);

        if (customer) {
            res.json(customer);
        } else {
            res.status(404).send('customer not found');
        }

    } catch (error) {
        console.log(error);
    }
}

customerCtrl.deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        await Customer.findByIdAndRemove(id);
        res.send('Customer removed successfully');

    } catch (error) {
        console.log(error);
    }
}

module.exports = customerCtrl;