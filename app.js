const express = require('express');
const app = express();
const router = require('./routes/index')
const mongoose = require('mongoose');

app.use(express.json());


app.use('/api/expService', router);

//Connection for the MongoDb
mongoose.connect('mongodb+srv://admin:admin@rentapp-vlhw0.mongodb.net/test?retryWrites=true', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function () {
        console.log("Connected to Mongodb")
    })
    .catch(function (err) {
        console.log("Cannot be connected to Db:", +err)

    });

//Connection for Browser
const port = process.env.port || 4000;
app.listen(port, () => {
    console.log('Listening to the port:' + port);
});