const { Router } = require('express')
const router = Router();

router.get('/', (req, res) => {
    res.send('Main endpoint books');
});

module.exports = router;