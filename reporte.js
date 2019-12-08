const Planeta = require('./Planeta');
const service = require('./Service/PeriodoService');



let Ferengi = new Planeta (500,-1);//Horario
let Vulcanos = new Planeta(1000,5);//AntiHorario
let Betasoides =  new Planeta (2000,-3);//Horario

let Galaxia = new Map();
Galaxia.set("Ferengi", Ferengi);
Galaxia.set("Vulcanos", Vulcanos);
Galaxia.set("Betasoides",Betasoides);



for (let dia=0; dia<=3600; dia++ ) {
    console.log("dia:",dia);
    for (var planeta of Galaxia.values()) {
        planeta.calcularPosicion(dia);
        console.log("X:", planeta.obtenerPosicionX(), "|", "Y:", planeta.obtenerPosicionY(), "| W", planeta.obtenerAngulo().toString()+"°Grados");
    }
    console.log("Hay sequia:",service.existePeriodoDeSequia(Galaxia.get("Ferengi"),Galaxia.get("Vulcanos"),Galaxia.get("Betasoides")));
    console.log("Hay Lluvia:",service.existenLluvias(Galaxia.get("Ferengi"),Galaxia.get("Vulcanos"),Galaxia.get("Betasoides")),"I:", service.obtenerIntensidadDeLluvias(Galaxia.get("Ferengi"),Galaxia.get("Vulcanos"),Galaxia.get("Betasoides")));
    console.log("Hay ConYTe:",service.existenCondicionesOptimasDePresionYTemperatura(Galaxia.get("Ferengi"),Galaxia.get("Vulcanos"),Galaxia.get("Betasoides")));
}
