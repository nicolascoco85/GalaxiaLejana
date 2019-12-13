var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PrediccionSchema = new Schema(
    {
        dia: String,
        clima: String
    }
);


var Prediccion = mongoose.model('Prediccion', PrediccionSchema);

module.exports.Prediccion = Prediccion;
