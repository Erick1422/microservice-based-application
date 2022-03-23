const { Router } = require('express')
const router = Router();
const bookCtrl = require('./bookController');

router.post('/', bookCtrl.addBook);

router.get('/', bookCtrl.listAllBooks);

router.get('/:id', bookCtrl.listBookById);

router.delete('/:id', bookCtrl.deleteBook);

module.exports = router;