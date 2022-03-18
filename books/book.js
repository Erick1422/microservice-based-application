const express = require('express');
const app = express();

app.use('/book', require('./bookRoute'))

app.listen(4000, () => {
    console.log('App runnig on port 4000');
});