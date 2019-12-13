var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PrediccionSchema = new Schema(
    {
        dia: String,
        clima: String
    }
);

module.exports =  mongoose.model('Prediccion', PrediccionSchema);
