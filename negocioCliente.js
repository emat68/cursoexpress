'use strict';
const fs = require('fs');
const path = require('path');
let util = require('util');
const express = require('express');
const bodyParser = require('body-parser');
const misclientes = require('./cliente2');
const cookieParser = require('cookie-parser');



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
   misclientes.
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
.post('/ingresaCliente', (req, res)=>{
    let insCli = new misclientes.cli45();
    insCli.setClienteValores(
    req.body.IdCliente,
    req.body.ClienteNombre,
    req.body.ClienteFecha,
    req.body.ClienteCalle,
    req.body.ClienteNumero,
    req.body.ClienteComuna,
    req.body.ClienteRegion
    );
     //res.end("Se ingreso datos cliente => " +  req.body.ClienteNombre);
    // res.send('./menu.html');
     res.redirect('/menu.html');
    // var P_id = req.body.IdCliente;
    // var P_nombre = req.body.ClienteNombre;
    // var P_fecha  = req.body.ClienteFecha;
    // var P_calle  = req.body.ClienteCalle;
    // var P_numero = req.body.ClienteNumero;
    // var P_comuna = req.body.ClienteComuna;
    // var P_region = req.body.ClienteRegion;
    //  insCli.setClienteValores(P_id,P_nombre,P_fecha,P_calle,P_numero,P_comuna,P_region);

})

.post('/empleados/id', (req, res)=>{
    
     let getCli = new misclientes.cli45();
     var datosClie = getCli.getMongoNombreXId(req.body.IdCliente);
     
     res.redirect('/respCliente.html');
    //  console.log(datosClie);
    //   datosCli.getsolonombre(function(empleados){
    //     console.log(empleados);
    //    res.end("Fin Leer Nombre" + empleados.idcliente +" " + empleados.nombre + " " + empleados.calle);
    // //    var json = JSON.stringify(empleados);
    // //     res.end("Fin Leer Nombre" + json);
})

.get('/mostrarQueryString', (req,res)=>{
    res.end("QueryString" + req.query);
})
.listen(4000);