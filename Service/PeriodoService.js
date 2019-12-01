class PeriodoService{
    constructor(){}

    estanAlineadosConElSol(planeta, otroPlaneta){

        let result = Math.abs(Math.abs( planeta.obtenerAngulo()) - Math.abs(otroPlaneta.obtenerAngulo()));


        return result== 0 || result== 180;

    }

    hayTresPlanetasAlineadosConElSol(PrimerPlaneta, SegundoPlaneta, TercerPlaneta){
        let resultPrimerPlanetaConSegundoPlaneta = this.estanAlineadosConElSol(PrimerPlaneta,SegundoPlaneta);
        let resultSegundoPlanetaContercerPlaneta = this.estanAlineadosConElSol(SegundoPlaneta,TercerPlaneta);
        return resultPrimerPlanetaConSegundoPlaneta && resultSegundoPlanetaContercerPlaneta;
    }

    estanAlineadoEntreSiSinElSol(PrimerPlaneta, SegundoPlaneta, TercerPlaneta){
        
        let xEnPlaneta= PrimerPlaneta.obtenerPosicionX();
        let yEnPlaneta= PrimerPlaneta.obtenerPosicionY();
        let xEnOtroPlaneta= SegundoPlaneta.obtenerPosicionX();
        let yEnOtroPlaneta= SegundoPlaneta.obtenerPosicionY();
        let xEnTercerPlaneta= TercerPlaneta.obtenerPosicionX();
        let yEnTercerPlaneta= TercerPlaneta.obtenerPosicionY();

        if ((xEnPlaneta-xEnTercerPlaneta)!=0 &&(xEnOtroPlaneta-xEnTercerPlaneta)!=0){
            let mPlaneta= (yEnPlaneta-yEnTercerPlaneta)/(xEnPlaneta-xEnTercerPlaneta);
            let mOtroPlaneta= (yEnOtroPlaneta-yEnTercerPlaneta)/(xEnOtroPlaneta-xEnTercerPlaneta);
            
                return mPlaneta==mOtroPlaneta;
        }
        else{
            return true;
        }
    }
}

module.exports = PeriodoService;

