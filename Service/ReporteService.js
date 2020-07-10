const Planeta = require('../Model/Planeta');
const service = require('../Service/PeriodoService');
const Prediccion = require('../Model/schemas/prediccion');
const Reporte = require('../Model/schemas/reporte');


let Ferengi = new Planeta(500, -1); //Horario
let Vulcanos = new Planeta(1000, 5); //AntiHorario
let Betasoides = new Planeta(2000, -3); //Horario
const CANTIDAD_DIAS_EN_DIEZ_ANIOS = 3600;

function obtenerClima(diaPedido) {

    Ferengi.calcularPosicion(diaPedido);
    Vulcanos.calcularPosicion(diaPedido);
    Vulcanos.calcularPosicion(diaPedido);


    let Galaxia = new Map();
    Galaxia.set("Ferengi", Ferengi);
    Galaxia.set("Vulcanos", Vulcanos);
    Galaxia.set("Betasoides", Betasoides);


    if (service.existePeriodoDeSequia(Galaxia.get("Ferengi"), Galaxia.get("Vulcanos"), Galaxia.get("Betasoides")))
        return "Sequia";

    if (service.existenLluvias(Galaxia.get("Ferengi"), Galaxia.get("Vulcanos"), Galaxia.get("Betasoides")))
        return "Lluvia";

    if (service.existenCondicionesOptimasDePresionYTemperatura(Galaxia.get("Ferengi"), Galaxia.get("Vulcanos"), Galaxia.get("Betasoides")))
        return "CondicionesOptimas";

    return "Normal";

}

async function generarReporteDePredicciones() {

    let Galaxia = new Map();
    Galaxia.set("Ferengi", Ferengi);
    Galaxia.set("Vulcanos", Vulcanos);
    Galaxia.set("Betasoides", Betasoides);

    let cantPeriodosSequia = 0;
    let cantPeriodosLluvia = 0;
    let maxPeriodosLluvia = 0;
    let diaDeMaxLluvia = 0;
    let cantPeriodosCondicionesOptimas = 0;


    for (let dia = 0; dia <= CANTIDAD_DIAS_EN_DIEZ_ANIOS; dia++) {

        for (var planeta of Galaxia.values()) {
            planeta.calcularPosicion(dia);
        }

        try {
            prediccion = new Prediccion({
                dia: dia,
                clima: obtenerClima(dia)
            });
            await prediccion.save();
        } catch (e) {
            console.error(e);
            return e;
        }


        if (service.existePeriodoDeSequia(Galaxia.get("Ferengi"), Galaxia.get("Vulcanos"), Galaxia.get("Betasoides"))) {
            cantPeriodosSequia = cantPeriodosSequia + 1
        } else {
            if (service.existenLluvias(Galaxia.get("Ferengi"), Galaxia.get("Vulcanos"), Galaxia.get("Betasoides"))) {
                cantPeriodosLluvia = cantPeriodosLluvia + 1
                let intensidadDiaria = service.obtenerIntensidadDeLluvias(Galaxia.get("Ferengi"), Galaxia.get("Vulcanos"), Galaxia.get("Betasoides"));
                if (maxPeriodosLluvia < intensidadDiaria) {
                    maxPeriodosLluvia = intensidadDiaria;
                    diaDeMaxLluvia = dia;
                }
            }
        }
        if (service.existenCondicionesOptimasDePresionYTemperatura(Galaxia.get("Ferengi"), Galaxia.get("Vulcanos"), Galaxia.get("Betasoides"))) {
            cantPeriodosCondicionesOptimas = cantPeriodosCondicionesOptimas + 1
        }
    }

    try {

        reporte = new Reporte({
            cantidadDeDiasSequia: cantPeriodosSequia,
            cantidadDeDiasLluvia: cantPeriodosLluvia,
            picoMaximoLluvia: maxPeriodosLluvia.toFixed(2),
            picoMaximoLluviaDia: diaDeMaxLluvia,
            cantidadDeDiasCondicionesOptimas: cantPeriodosCondicionesOptimas
        });

        await reporte.save();

    } catch (e) {
        console.error(e);
        return e;
    }
}

function isInt(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value));
}

function esNumeroPositivo(value){
    return  !!(isInt(value) && value >= 0);
}

function esDiaValido(request){
    if (request.query && request.query.dia) {
        if( esNumeroPositivo(request.query.dia)){
            return request.query.dia <=CANTIDAD_DIAS_EN_DIEZ_ANIOS;
        }
    }
    return false;
}

async function consultarDia(dia) {

  return await Prediccion.find({
        dia: dia
    }, "-_id -__v");

}

async function obtenerReporte() {
    return await Reporte.find({}, "-_id -__v").limit(1);
}

module.exports = {
    obtenerClima: async function(dia) {
        return await consultarDia(dia);
    },

    obtenerReporte: async function() {
        return await obtenerReporte();
    },
    generarReporteDePredicciones: async function() {
        await generarReporteDePredicciones();
    },
    esDiaValido : function (request) {
        return esDiaValido(request);
    }
}