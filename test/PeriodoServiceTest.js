const Planeta = require('../Planeta');
const PeriodoService = require('../Service/PeriodoService')
let chai = require('chai');
let assert = chai.assert;
var Service = new PeriodoService();


describe('Determinacion del Periodo en la Galaxia Lejana', function() {
    describe('Alineacion de planetas', function() {

        it('Dos planetas sobre el eje positivo de x, devuelve que estan alineados', function () {

            //Setup
            let planeta = new Planeta(1, 1);
            let otroPlaneta = new Planeta(2, 1);

            assert.isTrue(Service.estanAlineadosConElSol(planeta,otroPlaneta));
        });

        it('Dos planetas sobre el eje y, devuelve que estan alineados', function () {

            //Setup
            let planeta = new Planeta(1, 1);
            let otroPlaneta = new Planeta(2, 1);

            //Rotar 90 grados
            planeta.definirAngulo(90);
            otroPlaneta.definirAngulo(90);

            assert.isTrue(Service.estanAlineadosConElSol(planeta,otroPlaneta));
        });

        it('Un planeta a 45 grados y otro a 90, devuelve que no estan alineados', function () {

            //Setup
            let planeta = new Planeta(1, 1);
            let otroPlaneta = new Planeta(2, 1);

            //Rotar 90 grados
            planeta.definirAngulo(45);
            otroPlaneta.definirAngulo(90);

            assert.isFalse(Service.estanAlineadosConElSol(planeta,otroPlaneta));
        });

        it('Dos planetas, uno sobre el eje negativo de x y otro sobre el eje positivo de x, devuelve que estan alineados', function () {

            //Setup
            let planeta = new Planeta(1, 1);
            let otroPlaneta = new Planeta(2, 1);

            //Rotamos el otroPlaneta al eje negativo de x
            otroPlaneta.definirAngulo(180);

            assert.isTrue(Service.estanAlineadosConElSol(planeta,otroPlaneta));
        });

        it('Dos planetas parten del eje positivo de x, uno de ellos rota sobre el eje negativo de x, devuelve que estan alineados', function () {

            //Setup
            let planeta = new Planeta(1, 1);
            let otroPlaneta = new Planeta(2, 1);

            //Rotamos el otroPlaneta al eje negativo de x
            otroPlaneta.definirAngulo(180);

            assert.isTrue(Service.estanAlineadosConElSol(planeta,otroPlaneta));
        });

        it('3 planetas sobre el eje de x igual a 3,  devuelve que estan alineados sin el sol', function () {

            //Setup
            let planeta = new Planeta(3, 1);
            let otroPlaneta = new Planeta(3, 1);
            let tercerPlaneta = new Planeta(3, 1);

            //Posicionamiento
            planeta.definirPosicion(3,0);
            otroPlaneta.definirPosicion(3,0);
            tercerPlaneta.definirPosicion(3,0);

            assert.isTrue(Service.estanAlineadoEntreSiSinElSol(planeta,otroPlaneta,tercerPlaneta));
        });

        it('3 planetas sobre el eje de y igual a 3,  devuelve que estan alineados sin el sol', function () {

            //Setup
            let planeta = new Planeta(3, 1);
            let otroPlaneta = new Planeta(3, 1);
            let tercerPlaneta = new Planeta(3, 1);

            //Posicionamiento
            planeta.definirPosicion(0,3);
            otroPlaneta.definirPosicion(0,3);
            tercerPlaneta.definirPosicion(0,3);

            assert.isTrue(Service.estanAlineadoEntreSiSinElSol(planeta,otroPlaneta,tercerPlaneta));
        });

        it('3 planetas sobre el eje de y igual a 3,  devuelve false dado estan alineados sin el sol', function () {

            //Setup
            let planeta = new Planeta(5, 1);
            let otroPlaneta = new Planeta(3, 1);
            let tercerPlaneta = new Planeta(5, -1);

            //Posicionamiento dado
            planeta.definirAngulo(45)
            otroPlaneta.definirAngulo(0)
            tercerPlaneta.definirAngulo(315)

            assert.isFalse(Service.hayTresPlanetasAlineadosConElSol(planeta,otroPlaneta,tercerPlaneta));
        });

        it('3 planetas sobre el eje de y igual a 3,  devuelve true dado estan alineados sin el sol', function () {

            //Setup
            let planeta = new Planeta(5, 1);
            let otroPlaneta = new Planeta(3, 1);
            let tercerPlaneta = new Planeta(5, -1);

            //Posicionamiento
            planeta.calcularPosicion(45)
            otroPlaneta.calcularPosicion(0)
            tercerPlaneta.calcularPosicion(315)

            assert.isTrue(Service.estanAlineadoEntreSiSinElSol(planeta,otroPlaneta,tercerPlaneta));
        });

        it('Dado 3 planetas con distintos radio y angulo donde solo uno se desplazo ,  devuelve false dado estan alineados entre si', function () {

            //Setup
            let planeta = new Planeta(5, 2);
            let otroPlaneta = new Planeta(3, 1);
            let tercerPlaneta = new Planeta(2, -1);

            //Posicionamiento
            planeta.calcularPosicion(1)
            otroPlaneta.calcularPosicion(0)
            tercerPlaneta.calcularPosicion(0)

            assert.isFalse(Service.estanAlineadoEntreSiSinElSol(planeta,otroPlaneta,tercerPlaneta));
        });
   });
});