const { Router } = require('express')
const router = Router();
const orderCtrl = require('./orderController');

router.post('/', orderCtrl.addOrder);

router.get('/', orderCtrl.listAllOrders);

router.get('/:id', orderCtrl.listOrderById);

// router.delete('/:id', orderCtrl.deleteCustomer);

module.exports = router;