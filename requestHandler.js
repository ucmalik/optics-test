let All = []/*This store the Posts, Please use database Instead*/
let path = require('path');
const fs = require('fs');

module.exports.GetPosts = (req, response) => {
    response.sendStatus(200);
    //console.log(req.headers)
    //console.log(req.originalUrl)
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const headersJson = JSON.stringify(req.headers)
    Error = false

    fs.appendFile('GetREQ_URL.txt', "GET: " + fullUrl + '\r\n\r\n', function (err) {
        if (err) {
            Error = true;
            throw err;
        }
        console.log('Saved!');
    });

    if (!Error)
        fs.appendFile('GetREQ_Header.txt', headersJson + '\r\n\r\n\r\n\r\n', function (err) {
            if (err) {
                Error = true;
                throw err;
            }
            console.log('Saved!');
        });
}

module.exports.Post = (req, response) => {
    response.sendStatus(200);
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const headersJson = JSON.stringify(req.headers)
    Error = false

    fs.appendFile('POSTREQ_URL.txt', "POST: " + fullUrl + '\r\n\r\n', function (err) {
        if (err) {
            Error = true;
            throw err;
        }
        console.log('Saved!');
    });

    if (!Error)
        fs.appendFile('POSTREQ_Header.txt', headersJson + '\r\n\r\n\r\n\r\n', function (err) {
            if (err) {
                Error = true;
                throw err;
            }
            console.log('Saved!');
        });
}