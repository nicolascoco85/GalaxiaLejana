const Planeta = require('../Planeta');
const service = require('../Service/PeriodoService')

let Ferengi = new Planeta (500,-1);//Horario
let Vulcanos = new Planeta(1000,5);//AntiHorario
let Betasoides =  new Planeta (2000,-3);//Horario


function obtenerClima(diaPedido) {

    Ferengi.calcularPosicion(diaPedido);
    Vulcanos.calcularPosicion(diaPedido);
    Vulcanos.calcularPosicion(diaPedido);


    let Galaxia = new Map();
    Galaxia.set("Ferengi", Ferengi);
    Galaxia.set("Vulcanos", Vulcanos);
    Galaxia.set("Betasoides",Betasoides);


        if (service.existePeriodoDeSequia(Galaxia.get("Ferengi"), Galaxia.get("Vulcanos"), Galaxia.get("Betasoides")))
            return "Sequia";

        if (service.existenLluvias(Galaxia.get("Ferengi"), Galaxia.get("Vulcanos"), Galaxia.get("Betasoides")))
            return "Lluvia";

        if (service.existenCondicionesOptimasDePresionYTemperatura(Galaxia.get("Ferengi"), Galaxia.get("Vulcanos"), Galaxia.get("Betasoides")))
            return " Condiociones Optimas de Presion y Temperatura";

        return "Normal";

}

function obtenerReporte(){

    let Galaxia = new Map();
    Galaxia.set("Ferengi", Ferengi);
    Galaxia.set("Vulcanos", Vulcanos);
    Galaxia.set("Betasoides",Betasoides);

    let cantPeriodosSequia=0;
    let cantPeriodosLluvia = 0;
    let maxPeriodosLluvia=0;
    let diaDeMaxLluvia=0;
    let cantPeriodosCondicionesOptimas=0;



    for (let dia=0; dia<=3600; dia++ ) {
        //console.log("dia:",dia);
        for (var planeta of Galaxia.values()) {
            planeta.calcularPosicion(dia);
            // console.log("X:", planeta.obtenerPosicionX(), "|", "Y:", planeta.obtenerPosicionY(), "| W", planeta.obtenerAngulo().toString()+"°Grados");
        }
        if (service.existePeriodoDeSequia(Galaxia.get("Ferengi"),Galaxia.get("Vulcanos"),Galaxia.get("Betasoides"))){cantPeriodosSequia= cantPeriodosSequia+1}
        else{
            if (service.existenLluvias(Galaxia.get("Ferengi"),Galaxia.get("Vulcanos"),Galaxia.get("Betasoides")))
            {
                cantPeriodosLluvia=cantPeriodosLluvia+1
                let intensidadDiaria=service.obtenerIntensidadDeLluvias(Galaxia.get("Ferengi"),Galaxia.get("Vulcanos"),Galaxia.get("Betasoides"));
                if (maxPeriodosLluvia < intensidadDiaria){
                    maxPeriodosLluvia= intensidadDiaria;
                    diaDeMaxLluvia=dia;
                }
            }
        }
        if (service.existenCondicionesOptimasDePresionYTemperatura(Galaxia.get("Ferengi"),Galaxia.get("Vulcanos"),Galaxia.get("Betasoides"))){cantPeriodosCondicionesOptimas=cantPeriodosCondicionesOptimas+1}
    }

    let reporte= {
        Cantidad_de_Periodos_de_sequia: cantPeriodosSequia,
        Cantidad_de_Periodos_de_lluvia: cantPeriodosLluvia, Pico_Maximo_Lluvia: maxPeriodosLluvia.toFixed(2), Pico_Maximo_Dia: diaDeMaxLluvia,
        Cantidad_de_Periodos_de_cndiciones_optimas_de_presion_y_temperatura: cantPeriodosCondicionesOptimas
    }
     return reporte;
}

module.exports = {
    obtenerClima : function (dia) {

        return {dia: dia, clima: obtenerClima(dia)}
    },

    obtenerReporte: function () {

        return obtenerReporte();
    }
}