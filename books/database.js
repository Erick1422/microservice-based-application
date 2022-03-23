const mongoose = require('mongoose');

const URI = process.env.MONGODBURI;

mongoose.connect(URI, () => {
    console.log('Database online');
});