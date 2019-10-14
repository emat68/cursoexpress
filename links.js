const fs = require('fs');
const path = require('path');
let util = require('util');
const express = require('express');
const bodyParser = require('body-parser');
const misclientes = require('./cliente2');
const cookieParser = require('cookie-parser');
var modeloCliente2 = require('./transCliente');
const mongoUtil = require('./mongoUtil');

let app = express();


app.all(function(req, res, next){
  res.write('all\n');
  next();
})

app.get('/buscar/:idcliente', function(req, res, next){

    var vIdClientes = req.params['idcliente'];
    mongoUtil.connectToServer(function(err, callback){
      var db = mongoUtil.getDB();
      const datosc = db.collection('clientes');
      let _Id = "" + P_IdCliente;
      
      if (err){
          console.log(err);
      }else{
         datosc.find({idcliente:_Id}).toArray(function(err, objs)
         {
         res.json(datosc);
         })
      }
    })  
    // var datos = modeloCliente2.recuperaClientes(vIdClientes);   
    // res.write('get');
    // console.log(datos);
    // let j1 = JSON.stringify(datos);
    // res.end("Usuario encontrado => " + j1);
})

app.post('/', function(req, res, next){
    res.write('post');
    res.end();
})

app.listen(3000);
