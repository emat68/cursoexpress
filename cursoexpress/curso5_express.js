var http = require('http');
var express = require('express');
let app = express()
.use(function (req, res, next) {
    res.end('Hola dos...');
});
http.createServer(app).listen(3000);

