
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
    }
    getNombre(){
        return this.nombre;
    }
    getsolonombre(){
        arrClientes.map(function(cliente){
        //return cliente.nombre;
        console.log(cliente.nombre);
        })    
    }
}

module.exports = {
    cli45:Cliente,
    arrCli:arrClientes
}