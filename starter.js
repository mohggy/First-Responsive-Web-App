const { text } = require('body-parser');
const e = require('express');
const express = require('express');
const app = express();
const fs = require("fs");

const data = require("./data/data");
app.use('/style', express.static('./style'));
app.use('/images', express.static('./images'));
app.use('/scripts', express.static('./scripts'));

// Error message
const msg404 = 'Invalid Website URL/Cannot retrieve HTML file';

// Static Files
app.get('/', (req, res) => {
    fs.readFile("./main.html", function (error, pgRes) {
        if (error) {
            res.writeHead(404);
            res.write(msg404);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(pgRes);
        }
  
        res.end();
    });
});


// AJAX html & JSON files
app.get("/ajax-GET", function (req,res) {
    let responseFormat = req.query["format"];
    let dataList = null;

    if (responseFormat == "fudge-HTML") {
        res.setHeader("Content-Type", "text/html");
        dataList = data.getFudge();
        res.send(dataList);
    }

});

//Listening on 8000
let port = 8000;
app.listen(port, function () {
    console.log('lab 7, listening on port ' + port + '!');
});