var  db = require('./dbconnectMongo');
const condb = db.cnn

const db1 = condb.getc


'use strict';
var arrClientes = [];
class Direccion{
    constructor(){
        this.calle = "";
        this.numero = "";
        this.comuna = "";
        this.region = "";
    }

    setDireccionValores(_calle,_numero,_comuna,_region){
        this.calle = _calle;
        this.numero = _numero;
        this.comuna = _comuna;
        this.region = _region;
    }
}

class Cliente extends Direccion{

    constructor()
    {   
        super();

        this.idcliente = "";
        this.nombre = "";
        this.fechacreacion = "";
        this.direccion = "";
    }

    setClienteValores(P_id,P_nombre,P_fecha,P_calle,P_numero,P_comuna,P_region)
    {   
        this.idcliente = P_id;
        this.nombre = P_nombre;
        this.fechacreacion = P_fecha;
        this.direccion = super.setDireccionValores(P_calle,P_numero ,P_comuna, P_region);
        //var a = new Direccion();
        //this.direccion = a.setDireccionValores(P_calle,P_numero ,P_comuna, P_region);
        arrClientes.push(this);
        //console.log(arrClientes);
    }
    getNombre(){
        return this.nombre;
    }
    getDireccion(p_IdCliente){
        
    }
    // El parametro callback permitira retornar los datos a la funcion que llama
    getNombreId(p_idCli, callback){
        arrClientes.map(function(cliente, index){
            if (cliente.idcliente == p_idCli){
               // console.log("cliente: " + cliente.nombre);
               //retorno en parametro callback el resultado de la busqueda
               //retorno el array completo
                callback(cliente);

            }               
        })  
    }

    getsolonombre(callback){
        arrClientes.map(function(cliente, index){
        //console.log(index + " " + cliente.nombre);
        callback(cliente);
       
        })    
    }
}

module.exports = {
    cli45:Cliente,
    arrCli:arrClientes
}