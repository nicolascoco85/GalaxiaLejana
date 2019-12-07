function   estanAlineadosConElSol(planeta, otroPlaneta){

        let result = Math.abs(Math.abs( planeta.obtenerAngulo()) - Math.abs(otroPlaneta.obtenerAngulo()));


        return result== 0 || result== 180;

    }
function tienenMismaCoordenaX(primerPlaneta, segundoPlaneta, tercerPlaneta){
    return primerPlaneta.obtenerPosicionX()==segundoPlaneta.obtenerPosicionX() && segundoPlaneta.obtenerPosicionX()==tercerPlaneta.obtenerPosicionX()
}

function estaSobreElEjeY(primerPlaneta, segundoPlaneta, tercerPlaneta) {
    return tienenMismaCoordenaX(primerPlaneta,segundoPlaneta,tercerPlaneta) && tercerPlaneta.obtenerPosicionX()==0;
}

function tienenMismaCoordenaY(primerPlaneta, segundoPlaneta, tercerPlaneta){
    return primerPlaneta.obtenerPosicionY()==segundoPlaneta.obtenerPosicionY() && segundoPlaneta.obtenerPosicionY()==tercerPlaneta.obtenerPosicionY()
}

function estaSobreElEjeX(primerPlaneta, segundoPlaneta, tercerPlaneta){
    return tienenMismaCoordenaY(primerPlaneta, segundoPlaneta, tercerPlaneta)&& tercerPlaneta.obtenerPosicionY()==0;
}


function estanSobreUnEjeCartesiano(primerPlaneta, segundoPlaneta, tercerPlaneta){
      return estaSobreElEjeX(primerPlaneta, segundoPlaneta, tercerPlaneta) ||estaSobreElEjeY(primerPlaneta, segundoPlaneta, tercerPlaneta);
   }


function    hayTresPlanetasAlineadosConElSol(PrimerPlaneta, SegundoPlaneta, TercerPlaneta){
        let resultPrimerPlanetaConSegundoPlaneta = estanAlineadosConElSol(PrimerPlaneta,SegundoPlaneta);
        let resultSegundoPlanetaContercerPlaneta = estanAlineadosConElSol(SegundoPlaneta,TercerPlaneta);
        return resultPrimerPlanetaConSegundoPlaneta && resultSegundoPlanetaContercerPlaneta;
    }

function    estanAlineadoEntreSiSinElSol(PrimerPlaneta, SegundoPlaneta, TercerPlaneta){
        
        let xEnPlaneta= PrimerPlaneta.obtenerPosicionX();
        let yEnPlaneta= PrimerPlaneta.obtenerPosicionY();
        let xEnOtroPlaneta= SegundoPlaneta.obtenerPosicionX();
        let yEnOtroPlaneta= SegundoPlaneta.obtenerPosicionY();
        let xEnTercerPlaneta= TercerPlaneta.obtenerPosicionX();
        let yEnTercerPlaneta= TercerPlaneta.obtenerPosicionY();

        if (estanSobreUnEjeCartesiano(PrimerPlaneta, SegundoPlaneta, TercerPlaneta)){
            return false;
        }
        // Casos donde existe pendiente o recta horizontal
        if ((xEnPlaneta-xEnTercerPlaneta)!=0 &&(xEnOtroPlaneta-xEnTercerPlaneta)!=0){
            let mPlaneta= (yEnPlaneta-yEnTercerPlaneta)/(xEnPlaneta-xEnTercerPlaneta);
            let mOtroPlaneta= (yEnOtroPlaneta-yEnTercerPlaneta)/(xEnOtroPlaneta-xEnTercerPlaneta);
            let terminoIndependiente = yEnTercerPlaneta - mOtroPlaneta*xEnTercerPlaneta;


                return mPlaneta==mOtroPlaneta && terminoIndependiente!=0 ;
        }
        // Caso para alineados verticalmente sin pasar por el (0.0).
        return true;

}

function calcularAreaConElSol(primerPunto, segundoPunto) {

    return calcularArea(primerPunto, segundoPunto,undefined)

}

function calcularArea(primerPunto, segundoPunto, tercerPunto=undefined){

    let  result=0;
    if (tercerPunto!=undefined){
        result = (segundoPunto.obtenerPosicionX()-primerPunto.obtenerPosicionX())*((tercerPunto.obtenerPosicionY()-primerPunto.obtenerPosicionY()))-
            (tercerPunto.obtenerPosicionX()-primerPunto.obtenerPosicionX())*((segundoPunto.obtenerPosicionY()-primerPunto.obtenerPosicionY()))
    }else{//Si el tercer planeta no esta definido, la funcion asume que son las coordenadas de sol en (0,0)
        result = (segundoPunto.obtenerPosicionX()-primerPunto.obtenerPosicionX())*((0-primerPunto.obtenerPosicionY()))-
            (0-primerPunto.obtenerPosicionX())*((segundoPunto.obtenerPosicionY()-primerPunto.obtenerPosicionY()))
    }
    return Math.abs(result)/2;
}


function existeTrianguloAlrededorDelSol(planeta, otroPlaneta, tercerPlaneta) {

    let area1= calcularAreaConElSol(planeta,otroPlaneta);
    let area2= calcularAreaConElSol(planeta,tercerPlaneta);
    let area3= calcularAreaConElSol(otroPlaneta,tercerPlaneta);
    let areaTotal = calcularArea(planeta, otroPlaneta, tercerPlaneta);

    let sumaAreaParciales= area1+area2+area3;

        return areaTotal==sumaAreaParciales;
}

function estanAlineadosEntreSi(planeta, otroPlaneta, tercerPlaneta) {
    return tienenMismaCoordenaX(planeta,otroPlaneta,tercerPlaneta) || tienenMismaCoordenaY(planeta,otroPlaneta,tercerPlaneta);
}

module.exports = {

    existePeriodoDeSequia : function (primerPlaneta, segundoPlaneta, tercerPlaneta) {

        return hayTresPlanetasAlineadosConElSol(primerPlaneta,segundoPlaneta,tercerPlaneta);

    },

    existenCondicionesOptimasDePresionYTemperatura :function (primerPlaneta, segundoPlaneta, tercerPlaneta) {
        return estanAlineadoEntreSiSinElSol(primerPlaneta,segundoPlaneta,tercerPlaneta);

    },
    existenLluvias: function (planeta, otroPlaneta, tercerPlaneta) {
        return existeTrianguloAlrededorDelSol(planeta, otroPlaneta, tercerPlaneta) && !estanAlineadosEntreSi(planeta, otroPlaneta, tercerPlaneta);
    }



};




















