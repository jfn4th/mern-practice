const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    db = require('./db');

const app = express(),
    apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB Atlas connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
