var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ReporteSchema = new Schema({
        cantidadDeDiasSequia: Number,
        cantidadDeDiasLluvia: Number,
        picoMaximoLluvia: Number,
        picoMaximoLluviaDia: Number,
        cantidadDeDiasCondicionesOptimas: Number
});


module.exports = mongoose.model('Reporte', ReporteSchema);