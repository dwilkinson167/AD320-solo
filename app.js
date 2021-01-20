const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/users', (req, res) => {
    const articles = [];
    // code to retrieve users ...
    res.json(articles);
});

app.post('/users', (req, res) => {
    // code to add a new article...
    res.json(req.body);
});

app.listen(3000, () => console.log('server started'));