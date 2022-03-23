require('dotenv').config();

const express = require('express');
const app = express();

require('./database');
app.use(express.json());

app.use('/book', require('./bookRoute'))

app.listen(4000, () => {
    console.log('App runnig on port 4000 - Books Service');
});