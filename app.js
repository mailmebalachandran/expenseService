const express = require('express');
const app = express();
const router = require('./routes/index')
const mongoose = require('mongoose');

app.use(express.json());


app.use('/api/expService', router);

//Connection for the MongoDb
mongoose.connect('mongodb+srv://admin:admin@jesttest-xuodc.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function () {
        console.log("Connected to Mongodb")
    })
    .catch(function (err) {
        console.log("Error:", +err)
    });

//Connection for Browser
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log('Listening to the port:' + port);
});