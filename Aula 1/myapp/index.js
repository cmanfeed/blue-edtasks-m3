const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
})

app.get('/blue', function (req, res) {
    res.send('<h1>Welcome, Blue!</h1>');
})

app.listen(3000);

