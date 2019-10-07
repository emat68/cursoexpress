const express = require('express');
const bodyParser = require('body-parser');

let app = express()
.use(bodyParser())
.use(express.static(__dirname + '/public'))
.use(function(err,req,res,next){
    console.log(req.body);
    next();
})
.post('/leerFormulario', (req, res)=>{
    res.end("Hola" + req.body.objeto);
})
.get('/mostrarQueryString', (req,res)=>{
    res.end("QueryString" + req.query);
})
.listen(3000);