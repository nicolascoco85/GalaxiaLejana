const Planeta = require('../Planeta');
const service = require('../Service/PeriodoService')


function obtenerClima(diaPedido) {
    let Ferengi = new Planeta (500,-1);//Horario
    let Vulcanos = new Planeta(1000,5);//AntiHorario
    let Betasoides =  new Planeta (2000,-3);//Horario

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

module.exports = {
    obtenerClima : function (dia) {

        return {dia: dia, clima: obtenerClima(dia)}
    }
}