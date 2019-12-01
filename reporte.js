const Planeta = require('./Planeta');


let Ferengi = new Planeta (500,-1);
let Vulcanos = new Planeta(1000,5);
let Betasoides =  new Planeta (2000,-3);

let Galaxia = new Map();
Galaxia.set("Ferengi", Ferengi);
Galaxia.set("Vulcanos", Vulcanos);
Galaxia.set("Betasoides",Betasoides);

for (let dia=1; dia<=3600; dia++ ) {
    for (var planeta of Galaxia.values()) {
        console.log("dia:",dia);
        planeta.calcularPosicion(dia);
        console.log("X:", planeta.obtenerPosicionX(), "//", "Y:", planeta.obtenerPosicionY(), "//W", planeta.obtenerAngulo().toString()+"°Grados");
    }
}
