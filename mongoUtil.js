const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb://localhost:27017";

let _db;
let _cliente;
//funciona

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db('lab7');
      _cliente = client;
      callback( err );
    } );
  },

  getDB: function(callback) {
    return _db;
   //callback(_db);
  },
  disconnectDB: function() {
    _cliente.close();
  }
};


// const MongoClient = require('mongodb').MongoClient 
// //const uri = 'mongodb://user:password@localhost:27017/dbName' 
// const uri = 'mongodb://localhost:27017/lab7' 
// let _db 

// const connectDB = async (callback) => { 
//        try { MongoClient.connect(uri, (err, db) => { 
//             _db = db 
//             return callback(err) 
//             }) 
//            } catch (e) { throw e } 
// }
 
// const getDB = () => _db 
// const disconnectDB = () => _db.close() 
// module.exports = { connectDB, getDB, disconnectDB } 