var arrclientes = [];
function callobjetoCliente()
{

//Definicion de objetos dentro de objetos
var cliente= {
    idcliente: 1,
    nombre: "Ernesto",
    fechacreacion: "2019-09-20",
    direccion: {
        calle: "Pepe Viña",
        numero: "187",
        comuna: "La Reina",
        region: "metropolitana"
    }
}
arrclientes.push(cliente);

var cliente2= {
    idcliente: 2,
    nombre: "Jose",
    fechacreacion: "2019-09-21",
    direccion: {
        calle: "Pepe Viña",
        numero: "187",
        comuna: "La Reina",
        region: "metropolitana"
    }
}
arrclientes.push(cliente2);
var cliente3= {
    idcliente: 3,
    nombre: "Jhon",
    fechacreacion: "2019-09-22",
    direccion: {
        calle: "Pepe Viña",
        numero: "187",
        comuna: "La Reina",
        region: "metropolitana"
    }
}
arrclientes.push(cliente3);

};

var getnombres = function()
  {
    callobjetoCliente();
    return arrclientes;
};

var getsolonombre = function(){
    
    callobjetoCliente();
    arrclientes.map(function(cliente){   
    console.log(cliente.nombre);
    });
      
};

module.exports = { 
    cli:arrclientes,
    b:getnombres,
    c:getsolonombre
}

