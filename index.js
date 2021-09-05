const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
   res.status(200).send('HELOO !!! ');
});

app.get('/time', (req, res) => {
   let timeNow = Date(Date.now());
   res.status(200).send(timeNow.toString());
});

module.exports = app; 
