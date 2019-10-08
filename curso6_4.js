const express = require('express');
const bodyParser = require('body-parser');

let app = express()
.use(bodyParser())

.use(function(req, res){
    console.log(req.query); //Muestra los parámetros que se enviaron
    console.log(req.headers); //Muestra todo el Header
    console.log(req.get("accept-encoding")); //Recupera los datos de un parametro en particular
    console.log("Primera pagina");
    res.end('fin');
})
.listen(3000);