const express = require('express');
const bodyParser = require('body-parser');

let app = express()
.use(bodyParser())

.use(function(req, res){
    console.log(req.query); //Muestra los parámetros que se enviaron
    console.log(req.headers); //Muestra todo el Header
    console.log(req.get("accept-encoding")); //Recupera los datos de un parametro en particular

    if(req.body.objeto){
        res.end('fue encontrado el objeto'+req.body.objeto);
    }else{
        res.end('Cuerpo NO contiene objeto');
    }
})
.use(function(err, req, res, next){
    res.end('Cuerpo NO es valido');
})
.listen(3000);