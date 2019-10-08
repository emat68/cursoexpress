'use strict';
const fs = require('fs');
const path = require('path');
let util = require('util');
const express = require('express');
const bodyParser = require('body-parser');
const misclientes = require('./curso3_2');
let datosCli = misclientes.datosCliente;


let app = express()
.use(bodyParser())
.use(express.static(__dirname + '/public'))
.use(function(err,req,res,next){
    console.log(req.body);
    next();
})

.post('/leerArchivo', (req, res)=>{
    let fileurl;
    let filepath;
    var p_dir = req.body.directorio;
    fs.readdir(p_dir,(err, Files) => {
        Files.forEach((file) => {
            console.log(file);
            util.log(util.format('Archivos encontrados: %s', file));
        })
        if(err) return console.error(err);
       // console.log(Files.join(''));
    });
    res.end("Fin Leer Archivo" + req.body.directorio);
})

.post('/empleados', (req, res)=>{

    var empleado = datosCli.getNombreId(req.body.IdCliente);
    console.log(empleado);
     
})

.get('/empleados/todos', (req, res)=>{
     //var soloNombre1 = nn.getsolonombre();
     console.log(req.url);
      var soloNombre1 = datosCli.getsolonombre();
      console.log(soloNombre1);
      res.end("Fin Leer Nombre");
})

.get('/mostrarQueryString', (req,res)=>{
    res.end("QueryString" + req.query);
})
.listen(4000);



