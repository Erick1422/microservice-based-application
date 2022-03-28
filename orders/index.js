require('dotenv').config();
const express = require('express');
const app = express();

require('./database');
app.use(express.json());

app.use('/order', require('./orderRoute'))

app.listen(4002, () => {
    console.log('App runnig on port 4002 - orders Service');
});
