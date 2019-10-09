'use strict';
const fs = require('fs');
const path = require('path');
let util = require('util');
const express = require('express');
const bodyParser = require('body-parser');
const misclientes = require('./curso3_2');
const cookieParser = require('cookie-parser');
let datosCli = misclientes.datosCliente;


let app = express()
.use(cookieParser())
.use(bodyParser())
.use(express.static (__dirname + '/public'))
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
   
   //Para obtener los resultados de la llamada, se debe crear una funcion
   //
    datosCli.getNombreId(req.body.IdCliente,function(empleado){
        console.log(empleado);
        var json = JSON.stringify(empleado);
        res.cookie("Nombre",json);
        res.end("Fin Leer Id Cliente ==> " + empleado.IdCliente +" " + empleado.nombre + "" + empleado.calle);
    });
    // console.log(empleado);
    // //req.header('cookie');
    // res.cookie("Nombre",empleado);  
    // res.end("Fin Leer Id Cliente" + empleado);
     
})

.get('/empleados/todos', (req, res)=>{
     //var soloNombre1 = nn.getsolonombre();
     console.log(req.url);
      datosCli.getsolonombre(function(empleados){
        console.log(empleados);
       res.end("Fin Leer Nombre" + empleados.idcliente +" " + empleados.nombre + " " + empleados.calle);
    //    var json = JSON.stringify(empleados);
    //     res.end("Fin Leer Nombre" + json);
      });
      
})

.get('/mostrarQueryString', (req,res)=>{
    res.end("QueryString" + req.query);
})
.listen(4000);



