const MongoCliente = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbname = 'lab7_cliente';
const cliente = new MongoCliente(url);

cliente.connect(function(err){
    assert.equal(null,err);
    console.log("conexion OK");
    const db = cliente.db(dbname);
    callback(db);
})


module.exports = {
    cnn:cliente
}