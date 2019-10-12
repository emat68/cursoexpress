const mongoUtil = require('./mongoUtil');
const assert = require('assert');
let _db;

function insertCliente(P_cliente){

    mongoUtil.connectToServer(function(err, callback){
        // if (err){
        //     console.log(err);
        // }else{
        // _db = mongoUtil.getDB();
        // const datosc = _db.collection('clientes');
        //         datosc.insertMany([
        //      {a:1},{b:2},{c:3}
        //        ], function(err, result) {
        //           assert.equal(err,null);
        //           assert.equal(3, result.result.n);
        //           assert.equal(3, result.ops.length);
        //           console.log("Se insertaron 3 datos");
        //         //  callback(result);
        //       })
        //       mongoUtil.disconnectDB();
        //     }

       // assert.equal(null,err);
        if (err){
            console.log(err);
        }else{
           console.log("conexion OK");
           var db = mongoUtil.getDB();
           const datosc = db.collection('clientes');

           datosc.insertOne(P_cliente);
        //    datosc.insertMany([
        //         {a:1},{b:2},{c:3}
        //     ], function(err, result) {
        //         assert.equal(err,null);
        //         assert.equal(3, result.result.n);
        //         assert.equal(3, result.ops.length);
        //         console.log("Se insertaron 3 datos");
        //         //callback(result);
        //     })
            
            mongoUtil.disconnectDB();
            console.log("Cierre DB");
        } 
    }) 
}

function recuperaClientes(P_IdCliente){
    mongoUtil.connectToServer(function(err, callback){
        var db = mongoUtil.getDB();
        const datosc = db.collection('clientes');
        let _Id = "" + P_IdCliente;
        
        if (err){
            console.log(err);
        }else{
           console.log("conexion OK");
           console.log("Parametro => " + _Id );
           datosc.find({idcliente:_Id}).toArray(function(err, objs){
               if (objs.length >0){
                   console.log(objs);
                   return objs;
               }
           });         

            mongoUtil.disconnectDB();
            console.log("Cierre DB");
        } 
    })     
}
function eliminaClienteId(P_IdCliente){
    mongoUtil.connectToServer(function(err, callback){
        var db = mongoUtil.getDB();
        const datosc = db.collection('clientes');
        let _Id = '' + P_IdCliente;
        
        if (err){
            console.log(err);
        }else{
           console.log("conexion OK");
           console.log("Parametro => " + _Id );
           

            datosc.deleteOne({idcliente:_Id}, function(err, result){
                if (err)
                {
                    console.log("No fue posible eliminar el Empleado " + JSON.stringify({idcliente:_Id}));
                }
                else
                {
                    console.log("Se elimino el Empleado: " + JSON.stringify({idcliente:_Id}));
                }
            })      

            mongoUtil.disconnectDB();
            console.log("Cierre DB");
        } 
    })     
}
// cliente.connect(function(err){
//     assert.equal(null,err);
//     console.log("conexion OK");
//     const db = cliente.db(dbname);
//     insertDocumento(db, function(){
//         cliente.close(db);
//     });
// });
module.exports = { insertCliente, recuperaClientes, eliminaClienteId}
