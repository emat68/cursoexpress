const mongoUtil = require('./mongoUtil');
const assert = require('assert');

// const url = 'mongodb://localhost:27017';
// const dbname = 'lab7';
// const cliente = new MongoCliente(url);
mongoUtil.connectToServer(function(err){
    assert.equal(null,err);
    console.log("conexion OK");
})

var db = mongoUtil.getDb();

var insertDocumento = function(callback){
    const collection = db.collection('documents');
    collection.insertMany([
        {a:1},{b:2},{c:3}
    ], function(err, result) {
        assert.equal(err,null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Se insertaron 3 datos");
        callback(result);
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
