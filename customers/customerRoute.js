const { Router } = require('express')
const router = Router();
const customerCtrl = require('./customerController');

router.post('/', customerCtrl.addCustomer);

router.get('/', customerCtrl.listAllCustomers);

router.get('/:id', customerCtrl.listCustomerById);

router.delete('/:id', customerCtrl.deleteCustomer);

module.exports = router;