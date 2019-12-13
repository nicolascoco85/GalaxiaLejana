const mongoose = require('mongoose');
const config = require('../config/config');

function conectarDB(){
    mongoose.connect(config.MONGODB_URI, config.MONGODB_CONFIG).then(()=>{
        console.log('MongoDB conectada!')
    }).catch(err=>{
        setTimeout(conectarDB, 5000)
    })
}

module.exports= {
    conectarDB: function () {
        conectarDB();
    }
};