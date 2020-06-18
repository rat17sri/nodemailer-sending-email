const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT | 80;

const app = express();

app.use(cors());

const contact = require('./routes/contact-us');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://advancetranscription.com"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.enable('trust proxy');

// Body Parser
app.use(bodyParser.json());

app.use('/api/contact-us', contact);

app.listen(PORT, function() {
    console.log('Server started at port ', PORT);
});