const Planeta = require('../Planeta');
const Service = require('../Service/PeriodoService')
let chai = require('chai');
let assert = chai.assert;



describe('Determinacion del Periodo en la Galaxia Lejana', function() {
    describe('Alineacion de planetas', function() {

        it('3 planetas  con su posicion de original ,  devuelve que  existe sequia ', function () {

            //Setup
            let planeta = new Planeta(1, 1);
            let otroPlaneta = new Planeta(2, 1);
            let tercerPlaneta = new Planeta(3, -1);

            assert.isTrue(Service.existePeriodoDeSequia(planeta,otroPlaneta,tercerPlaneta));
        });


        it('3 planetas en su posicion original son trasladados en una unidad, devuelve que existe sequia', function () {

            //Setup
            let planeta = new Planeta(1, 1);
            let otroPlaneta = new Planeta(2, 1);
            let tercerPlaneta = new Planeta(3, 1);

            //Posicionamiento
            planeta.definirPosicion(2,0);
            otroPlaneta.definirPosicion(3,0);
            tercerPlaneta.definirPosicion(4,0);

            assert.isFalse(Service.existenCondicionesOptimasDePresionYTemperatura(planeta,otroPlaneta,tercerPlaneta));
            assert.isTrue(Service.existePeriodoDeSequia(planeta,otroPlaneta,tercerPlaneta));
        });

        it('3 planetas sobre el eje de y ,  devuelve que existe sequia', function () {

            //Setup
            let planeta = new Planeta(3, 1);
            let otroPlaneta = new Planeta(5, 1);
            let tercerPlaneta = new Planeta(7, 1);

            //Posicionamiento
            planeta.definirPosicion(0,3);
            otroPlaneta.definirPosicion(0,4);
            tercerPlaneta.definirPosicion(0,7);

            assert.isTrue(Service.existePeriodoDeSequia(planeta,otroPlaneta,tercerPlaneta));
        });

        it('3 planetas: 2 planetas con coordenadas (2,2) y (3,3) y el restante (-2,-2),  devuelve existe sequia y no condiciones optimas', function () {

            //Setup
            let planeta = new Planeta(5, 1);
            let otroPlaneta = new Planeta(3, 1);
            let tercerPlaneta = new Planeta(5, -1);

            //Posicionamiento dado
            planeta.definirPosicion(2,2);
            otroPlaneta.definirPosicion(3,3);
            tercerPlaneta.definirPosicion(-2,-2);

            assert.isTrue(Service.existePeriodoDeSequia(planeta,otroPlaneta,tercerPlaneta));
        });

        it('3 planetas sobre con posicion x=6 ,  devuelve que existen condiones optimas', function () {

            //Setup
            let planeta = new Planeta(12, 1);
            let otroPlaneta = new Planeta(6, 1);
            let tercerPlaneta = new Planeta(12, -1);

            //Posicionamiento dado
            planeta.definirPosicion(6,2);
            otroPlaneta.definirPosicion(6,3);
            tercerPlaneta.definirPosicion(6,-2);

            assert.isTrue(Service.existenCondicionesOptimasDePresionYTemperatura(planeta,otroPlaneta,tercerPlaneta));
        });


   });
});