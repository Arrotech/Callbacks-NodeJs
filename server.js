const prettyjson = require('prettyjson');
const express = require('express');
const bodyParser = require('body-parser')

const options = {
    noColor: true
};

// create an express app and configure it with boadyParser middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// B2C ResultURL - /api/v1/b2c/result
app.post('/b2c/result', (req, res) => {
    console.log('-----------B2C RESULT-----------');

    console.log(prettyjson.render(req.body, options));
    console.log('-----------------------');

    let message = {
        "ResponseCode": "00000000",
        "ResponseDesc": "success"
    };

    res.json(message);
});

// B2C QueueTimeoutURL - /api/v1/b2c/timeout
app.post('/b2c/timeout', function(req, res) {
    console.log('-----------B2C TIMEOUT------------');
    console.log(prettyjson.render(req.body, options));
    console.log('-----------------------');

    var message = {
        "ResponseCode": "00000000",
        "ResponseDesc": "success"
    };

    res.json(message);
});

// C2B ValidationURL - /api/v1/c2b/validation
app.post('/validation', function(req, res) {
    console.log('-----------C2B VALIDATION REQUEST-----------');
    console.log(prettyjson.render(req.body, options));
    console.log('-----------------------');

    var message = {
        "ResultCode": 0,
        "ResultDesc": "Success",
        "ThirdPartyTransID": "1234567890"
    };

    res.json(message);
});

// C2B ConfirmationURL - /api/v1/c2b/confirmation
app.post('/confirmation', function(req, res) {
    console.log('-----------C2B CONFIRMATION REQUEST------------');
    console.log(prettyjson.render(req.body, options));
    console.log('-----------------------');

    var message = {
        "ResultCode": 0,
        "ResultDesc": "Success"
    };

    res.json(message);
});

// B2B ResultURL - /api/v1/b2b/result
app.post('/b2b/result', function(req, res) {
    console.log('-----------B2B CALLBACK------------');
    console.log(prettyjson.render(req.body, options));
    console.log('-----------------------');

    var message = {
        "ResponseCode": "00000000",
        "ResponseDesc": "success"
    };

    res.json(message);
});


// B2B QueueTimeoutURL - /api/v1/b2b/timeout
app.post('/b2b/timeout', function(req, res) {
    console.log('-----------B2B TIMEOUT------------');
    console.log(prettyjson.render(req.body, options));
    console.log('-----------------------');

    var message = {
        "ResponseCode": "00000000",
        "ResponseDesc": "success"
    };

    res.json(message);
});


const server = app.listen(5000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`server listening on port ${port}`);
});