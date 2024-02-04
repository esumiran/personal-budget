const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use('/', express.static('public'));


app.get('/hello', (req, res) => {
    res.send('Hello World!');
});


app.get('/budget', (req, res) => {
    fs.readFile('budget.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('An error occurred while reading the budget file.');
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});