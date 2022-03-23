require('dotenv').config();
const express = require('express');
const app = express();

require('./database');
app.use(express.json());

app.use('/customer', require('./customerRoute'))

app.listen(4001, () => {
    console.log('App runnig on port 4001 - Customers Service');
});
