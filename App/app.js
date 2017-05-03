﻿var express = require('express');
var multer = require('multer');

var app = express();


var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        
        callback(null, file.originalname);
    }
});

var upload = multer({ storage: storage }).single('fileToUpload');

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/api/photo', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

var server = app.listen(8081, function () {
    var port = server.address().port

    console.log("Server listening on port " + port)
})