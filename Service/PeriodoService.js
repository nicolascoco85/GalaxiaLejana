function estanAlineadosConElSol(planeta, otroPlaneta) {

    let result = Math.abs(Math.abs(planeta.obtenerAngulo()) - Math.abs(otroPlaneta.obtenerAngulo()));


    return result == 0 || result == 180;

}

function tienenMismaCoordenaX(primerPlaneta, segundoPlaneta, tercerPlaneta) {
    return primerPlaneta.obtenerPosicionX() == segundoPlaneta.obtenerPosicionX() && segundoPlaneta.obtenerPosicionX() == tercerPlaneta.obtenerPosicionX()
}

function tienenMismaCoordenaY(primerPlaneta, segundoPlaneta, tercerPlaneta) {
    return primerPlaneta.obtenerPosicionY() == segundoPlaneta.obtenerPosicionY() && segundoPlaneta.obtenerPosicionY() == tercerPlaneta.obtenerPosicionY()
}

function hayTresPlanetasAlineadosConElSol(PrimerPlaneta, SegundoPlaneta, TercerPlaneta) {
    let resultPrimerPlanetaConSegundoPlaneta = estanAlineadosConElSol(PrimerPlaneta, SegundoPlaneta);
    let resultSegundoPlanetaContercerPlaneta = estanAlineadosConElSol(SegundoPlaneta, TercerPlaneta);
    return resultPrimerPlanetaConSegundoPlaneta && resultSegundoPlanetaContercerPlaneta;
}

function estanAlineadoEntreSiSinElSol(PrimerPlaneta, SegundoPlaneta, TercerPlaneta) {

    let xEnPlaneta = PrimerPlaneta.obtenerPosicionX();
    let yEnPlaneta = PrimerPlaneta.obtenerPosicionY();
    let xEnOtroPlaneta = SegundoPlaneta.obtenerPosicionX();
    let yEnOtroPlaneta = SegundoPlaneta.obtenerPosicionY();
    let xEnTercerPlaneta = TercerPlaneta.obtenerPosicionX();
    let yEnTercerPlaneta = TercerPlaneta.obtenerPosicionY();

    //Vertical
    if ((xEnPlaneta == xEnOtroPlaneta) && (xEnOtroPlaneta == xEnTercerPlaneta) && xEnTercerPlaneta != 0) {
        return true;
    }
    //Horizontal
    if ((yEnPlaneta == yEnOtroPlaneta) && (yEnOtroPlaneta == yEnTercerPlaneta) && yEnTercerPlaneta != 0) {
        return true;
    }
    let m = (yEnPlaneta - yEnTercerPlaneta) / (xEnPlaneta - xEnTercerPlaneta);
    let b = m * (-xEnTercerPlaneta) + yEnTercerPlaneta;

    // el segundo planeta pertenece a la recta y no pasa por el origen
    if ((yEnOtroPlaneta == m * xEnOtroPlaneta + b) && b != 0) {
        return true;
    }

    return false;

}

function calcularAreaConElSol(primerPunto, segundoPunto) {

    return calcularArea(primerPunto, segundoPunto, undefined)

}

function calcularArea(primerPunto, segundoPunto, tercerPunto = undefined) {

    let result = 0;
    if (tercerPunto != undefined) {
        result = (segundoPunto.obtenerPosicionX() - primerPunto.obtenerPosicionX()) * ((tercerPunto.obtenerPosicionY() - primerPunto.obtenerPosicionY())) -
            (tercerPunto.obtenerPosicionX() - primerPunto.obtenerPosicionX()) * ((segundoPunto.obtenerPosicionY() - primerPunto.obtenerPosicionY()))
    } else { //Si el tercer planeta no esta definido, la funcion asume que son las coordenadas de sol en (0,0)
        result = (segundoPunto.obtenerPosicionX() - primerPunto.obtenerPosicionX()) * ((0 - primerPunto.obtenerPosicionY())) -
            (0 - primerPunto.obtenerPosicionX()) * ((segundoPunto.obtenerPosicionY() - primerPunto.obtenerPosicionY()))
    }
    return Math.abs(result) / 2;
}


function existeTrianguloAlrededorDelSol(planeta, otroPlaneta, tercerPlaneta) {

    let area1 = calcularAreaConElSol(planeta, otroPlaneta);
    let area2 = calcularAreaConElSol(planeta, tercerPlaneta);
    let area3 = calcularAreaConElSol(otroPlaneta, tercerPlaneta);
    let areaTotal = calcularArea(planeta, otroPlaneta, tercerPlaneta);

    let sumaAreaParciales = area1 + area2 + area3;

    return areaTotal == sumaAreaParciales;
}

function estanAlineadosEntreSi(planeta, otroPlaneta, tercerPlaneta) {
    return tienenMismaCoordenaX(planeta, otroPlaneta, tercerPlaneta) || tienenMismaCoordenaY(planeta, otroPlaneta, tercerPlaneta);
}

function obtenerDistanciaEntrePlanetas(p1, p2) {
    let x1 = p1.obtenerPosicionX();
    let y1 = p1.obtenerPosicionY();
    let x2 = p2.obtenerPosicionX();
    let y2 = p2.obtenerPosicionY();

    let result = Math.round((Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))) * 100) / 100;

    return result;

}

function obtenerPerimetro(p1, p2, p3) {
    let ladoP1P2 = obtenerDistanciaEntrePlanetas(p1, p2);
    let ladoP2P3 = obtenerDistanciaEntrePlanetas(p2, p3);
    let ladoP3P1 = obtenerDistanciaEntrePlanetas(p3, p1);

    return ladoP1P2 + ladoP2P3 + ladoP3P1;
}

module.exports = {

    existePeriodoDeSequia: function(primerPlaneta, segundoPlaneta, tercerPlaneta) {

        return hayTresPlanetasAlineadosConElSol(primerPlaneta, segundoPlaneta, tercerPlaneta);

    },

    existenCondicionesOptimasDePresionYTemperatura: function(primerPlaneta, segundoPlaneta, tercerPlaneta) {
        return estanAlineadoEntreSiSinElSol(primerPlaneta, segundoPlaneta, tercerPlaneta);

    },
    existenLluvias: function(planeta, otroPlaneta, tercerPlaneta) {
        return existeTrianguloAlrededorDelSol(planeta, otroPlaneta, tercerPlaneta) && !estanAlineadosEntreSi(planeta, otroPlaneta, tercerPlaneta);
    },
    obtenerIntensidadDeLluvias: function(planeta, otroPlaneta, tercerPlaneta) {

        if (existeTrianguloAlrededorDelSol(planeta, otroPlaneta, tercerPlaneta) && !estanAlineadosEntreSi(planeta, otroPlaneta, tercerPlaneta)) {
            return obtenerPerimetro(planeta, otroPlaneta, tercerPlaneta);
        }
        return 0;
    }
};