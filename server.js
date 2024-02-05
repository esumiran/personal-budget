const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

app.use('/', express.static('public'));

const budget = {
    myBudget: [
    {
        title: 'Eat out',
        budget: 40
    },

    {
        title: 'Rent',
        budget: 400 
    },
    {
        title: 'Groceries',
        budget: 100
    },
 ]
};

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.get('/doughnut', (req, res) => {
    fs.readFile('doughnut.json', 'utf8', (err, data) => {
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