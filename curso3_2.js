//var funciones = require('./curso3');
'use strict';
//var cliente = require('./cliente');
var cliente3 = require("./cliente2")
var datos = cliente3.arrCli;

let nn = new cliente3.cli45();
nn.setClienteValores("1","Ernesto","2019-09-22","Pepe Vila","187","La Reina","13");
let nn = new cliente3.cli45();
nn.setClienteValores("2","Teresa","2019-09-22","Pepe Vila","187","La Reina","13");
let nn = new cliente3.cli45();
nn.setClienteValores("3","juan","2019-09-24","Pepe Vila","187","La Reina","13");
let nn = new cliente3.cli45();
nn.setClienteValores("4","Pedro","2019-09-27","Pepe Vila","187","La Reina","13");

//Muestro los datos del arreglo
//console.log(datos);

//Recupero solo los nombres
//var soloNombre1 = nn.getsolonombre();
//console.log(soloNombre1);
module.exports = {
    datosCliente:datos
}
