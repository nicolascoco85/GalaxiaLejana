const Planeta = require('./Planeta');
const service = require('./Service/PeriodoService');



let Ferengi = new Planeta (500,-1);//Horario
let Vulcanos = new Planeta(1000,5);//AntiHorario
let Betasoides =  new Planeta (2000,-3);//Horario

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

/*    console.log("Hay sequia:",service.existePeriodoDeSequia(Galaxia.get("Ferengi"),Galaxia.get("Vulcanos"),Galaxia.get("Betasoides")));
    console.log("Hay Lluvia:",service.existenLluvias(Galaxia.get("Ferengi"),Galaxia.get("Vulcanos"),Galaxia.get("Betasoides")),"I:", service.obtenerIntensidadDeLluvias(Galaxia.get("Ferengi"),Galaxia.get("Vulcanos"),Galaxia.get("Betasoides")));
    console.log("Hay ConYTe:",service.existenCondicionesOptimasDePresionYTemperatura(Galaxia.get("Ferengi"),Galaxia.get("Vulcanos"),Galaxia.get("Betasoides")));*/
}

console.log("Reporte para los próximos 10 años: ")
console.log("Cantidad de Periodos de sequia:", cantPeriodosSequia);
console.log("Cantidad de Periodos de lluvia:", cantPeriodosLluvia, "Pico Maximo:", maxPeriodosLluvia.toFixed(2), "Dia:", diaDeMaxLluvia);
console.log("Cantidad de Periodos de condiciones optimas de presion y temperatura:", cantPeriodosCondicionesOptimas);
