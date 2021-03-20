const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const fetch = require('node-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');


// Creating an instance of the app
const app = express()


// Configure express to use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross-origin
app.use(cors());

// Set the production folder
app.use(express.static('dist'));


app.get('/', sendFile);

function sendFile(req, res) {
    res.sendFile('dist/index.html');
}


// Set up server 
const port = 8080;
const server = app.listen(port, listening);

function listening() {
    console.log('server running');
    console.log(`running on localhost: ${port}!`);
}
// app.listen(8080, function() {
// console.log('Example app listening on port 8080!')
//})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})

// Post Route
app.post('/meaningcloud-api', async function(req, res) {
    const apiURL = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${req.body.url}&lang=en`
    console.log(apiURL)
    const response = await fetch(apiURL)
    try {
        const data = await response.json()
        console.log(data)
        res.send(data)

    } catch (error) {
        console.log(error)
    }
})