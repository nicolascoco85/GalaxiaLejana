var mongoose = require('mongoose');
const service = require('../Service/ReporteService');
var db = mongoose.connection;


const options = {
    autoIndex: false, // Don't build indexes
    reconnectTries: 30, // Retry up to 30 times
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
}


function conectarDB(){
    console.log('MongoDB connection with retry')
    mongoose.connect("mongodb://localhost:27017/test", options).then(()=>{
        console.log('MongoDB is connected')
    }).catch(err=>{
        console.log('MongoDB connection unsuccessful, retry after 5 seconds.')
        setTimeout(conectarDB, 5000)
    })
}

function borrarDB (){
   db.dropDatabase(function (err, result) {

            if (err) {
                console.log("error al borrar la coleccion");
            } else {
                console.log("Se borro la coleccion completamente");
            }
        });
}

module.exports= {
    borrarBase : function (){
        borrarDB();
    },
    conectarDB: function () {
        conectarDB();
    },

    cargarDB: function (Prediccion) {
        service.cargarReportes(Prediccion);
    }
};