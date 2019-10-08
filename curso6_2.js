const express = require('express');
const serverIndex = require('serve-index');

let app = express()
.use(express.static(__dirname )) //Muestra los directorios
.use(serverIndex(__dirname )) //Muestra los archivos 
.listen(3000);
