function   estanAlineadosConElSol(planeta, otroPlaneta){

        let result = Math.abs(Math.abs( planeta.obtenerAngulo()) - Math.abs(otroPlaneta.obtenerAngulo()));


        return result== 0 || result== 180;

    }

function estaSobreElEjeY(primerPlaneta, segundoPlaneta, tercerPlaneta) {
    return primerPlaneta.obtenerPosicionX()==segundoPlaneta.obtenerPosicionX() && segundoPlaneta.obtenerPosicionX()==tercerPlaneta.obtenerPosicionX() && tercerPlaneta.obtenerPosicionX()==0;
}

function estaSobreElEjeX(primerPlaneta, segundoPlaneta, tercerPlaneta){
    return primerPlaneta.obtenerPosicionY()==segundoPlaneta.obtenerPosicionY() && segundoPlaneta.obtenerPosicionY()==tercerPlaneta.obtenerPosicionY() && tercerPlaneta.obtenerPosicionY()==0;
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

        if ((xEnPlaneta-xEnTercerPlaneta)!=0 &&(xEnOtroPlaneta-xEnTercerPlaneta)!=0){
            let mPlaneta= (yEnPlaneta-yEnTercerPlaneta)/(xEnPlaneta-xEnTercerPlaneta);
            let mOtroPlaneta= (yEnOtroPlaneta-yEnTercerPlaneta)/(xEnOtroPlaneta-xEnTercerPlaneta);
            let terminoIndependiente = yEnTercerPlaneta - mOtroPlaneta*xEnTercerPlaneta;


                return mPlaneta==mOtroPlaneta && terminoIndependiente!=0 ;
        }

        return true;

}



module.exports = {

    existePeriodoDeSequia : function (primerPlaneta, segundoPlaneta, tercerPlaneta) {

        return hayTresPlanetasAlineadosConElSol(primerPlaneta,segundoPlaneta,tercerPlaneta);

    },

    existenCondicionesOptimasDePresionYTemperatura :function (primerPlaneta, segundoPlaneta, tercerPlaneta) {
        return estanAlineadoEntreSiSinElSol(primerPlaneta,segundoPlaneta,tercerPlaneta);

    }



};




















