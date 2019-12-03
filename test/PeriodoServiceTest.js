const Planeta = require('../Planeta');
const Service = require('../Service/PeriodoService')
let chai = require('chai');
let assert = chai.assert;


function setUpPlanetas() {
    let planeta = new Planeta(3, 1);
    let otroPlaneta = new Planeta(5, 1);
    let tercerPlaneta = new Planeta(7, 1);
    return {planeta, otroPlaneta, tercerPlaneta};
}

describe('Determinacion del Periodo en la Galaxia Lejana', function() {
    describe('Alineacion de planetas', function() {

        it('3 planetas  con su posicion de original ,  devuelve que  existe sequia ', function () {

            //Setup
            let {planeta, otroPlaneta, tercerPlaneta} = setUpPlanetas();

            assert.isTrue(Service.existePeriodoDeSequia(planeta,otroPlaneta,tercerPlaneta));
        });


        it('3 planetas en su posicion original son trasladados en una unidad, devuelve que existe sequia', function () {

            //Setup
            let {planeta, otroPlaneta, tercerPlaneta} = setUpPlanetas();

            //Posicionamiento
            planeta.definirPosicion(2,0);
            otroPlaneta.definirPosicion(3,0);
            tercerPlaneta.definirPosicion(4,0);

            assert.isFalse(Service.existenCondicionesOptimasDePresionYTemperatura(planeta,otroPlaneta,tercerPlaneta));
            assert.isTrue(Service.existePeriodoDeSequia(planeta,otroPlaneta,tercerPlaneta));
        });

        it('3 planetas sobre el eje de Y,  devuelve que existe sequia', function () {

            //Setup
            let {planeta, otroPlaneta, tercerPlaneta} = setUpPlanetas();

            //Posicionamiento
            planeta.definirPosicion(0,1);
            otroPlaneta.definirPosicion(0,2);
            tercerPlaneta.definirPosicion(0,3);

            //Defino el angulo
            planeta.definirAngulo(90);
            otroPlaneta.definirAngulo(90);
            tercerPlaneta.definirAngulo(90);

            assert.isTrue(Service.existePeriodoDeSequia(planeta,otroPlaneta,tercerPlaneta));
        });

        it('3 planetas: 2 planetas  alineados a 45 grados y el restante a 225,  devuelve existe sequia y no condiciones optimas', function () {

            //Setup
            let {planeta, otroPlaneta, tercerPlaneta} = setUpPlanetas();

            //Defino el angulo
            planeta.definirAngulo(45);
            otroPlaneta.definirAngulo(45);
            tercerPlaneta.definirAngulo(225);

            assert.isTrue(Service.existePeriodoDeSequia(planeta,otroPlaneta,tercerPlaneta));
        });

        it('3 planetas: 2 planetas alineados 225, y el restante a 45  devuelve existe sequia ', function () {

            //Setup
            let {planeta, otroPlaneta, tercerPlaneta} = setUpPlanetas();

            //Posicionamiento dado
            planeta.definirPosicion(2,2);
            otroPlaneta.definirPosicion(-3,-3);
            tercerPlaneta.definirPosicion(-2,-2);

            //Defino el angulo
            planeta.definirAngulo(45);
            otroPlaneta.definirAngulo(225);
            tercerPlaneta.definirAngulo(225);

            assert.isTrue(Service.existePeriodoDeSequia(planeta,otroPlaneta,tercerPlaneta));
        });

        it('3 planetas: 2 planetas alineados 135, y el restante a 315   devuelve existe sequia ', function () {

            //Setup
            let {planeta, otroPlaneta, tercerPlaneta} = setUpPlanetas();

            //Posicionamiento dado
            planeta.definirPosicion(-2,2);
            otroPlaneta.definirPosicion(-3,3);
            tercerPlaneta.definirPosicion(2,-2);

            //Defino el angulo
            planeta.definirAngulo(135);
            otroPlaneta.definirAngulo(135);
            tercerPlaneta.definirAngulo(315);

            assert.isTrue(Service.existePeriodoDeSequia(planeta,otroPlaneta,tercerPlaneta));
        });

        it('3 planetas: 1 planetas alineados 135, y los 2 restante a 315   devuelve existe sequia ', function () {

            //Setup
            let {planeta, otroPlaneta, tercerPlaneta} = setUpPlanetas();

            //Posicionamiento dado
            planeta.definirPosicion(-2,2);
            otroPlaneta.definirPosicion(3,-3);
            tercerPlaneta.definirPosicion(2,-2);

            //Defino el angulo
            planeta.definirAngulo(135);
            otroPlaneta.definirAngulo(315);
            tercerPlaneta.definirAngulo(315);

            assert.isTrue(Service.existePeriodoDeSequia(planeta,otroPlaneta,tercerPlaneta));
        });

        it('3 planetas: alineados a 320 , devuelve existe sequia ', function () {

            //Setup
            let {planeta, otroPlaneta, tercerPlaneta} = setUpPlanetas();

            //Defino el angulo
            planeta.definirAngulo(320);
            otroPlaneta.definirAngulo(320);
            tercerPlaneta.definirAngulo(320);

            assert.isTrue(Service.existePeriodoDeSequia(planeta,otroPlaneta,tercerPlaneta));
        });

        it('3 planetas: 2 con su posicion de original y el restante a 10 grados,  devuelve que no existe sequia ', function () {

            //Setup
            let {planeta, otroPlaneta, tercerPlaneta} = setUpPlanetas();

            //Defino tercer planeta a 10 grados
            tercerPlaneta.definirAngulo(10);

            assert.isFalse(Service.existePeriodoDeSequia(planeta,otroPlaneta,tercerPlaneta));
        });


        it('3 planetas: cada uno con angulos escalonados a 10 grados, devuelve que no existe sequia', function () {

            //Setup
            let {planeta, otroPlaneta, tercerPlaneta} = setUpPlanetas();


            //Defino el angulo
            planeta.definirAngulo(10);
            otroPlaneta.definirAngulo(20);
            tercerPlaneta.definirAngulo(30);

            assert.isFalse(Service.existePeriodoDeSequia(planeta,otroPlaneta,tercerPlaneta));
        });

        it('3 planetas: a 45, 135 y 180 grados respectivamente ,  devuelve que no existe sequia', function () {

            //Setup
            let {planeta, otroPlaneta, tercerPlaneta} = setUpPlanetas();

            //Posicionamiento
            planeta.definirPosicion(1,1);
            otroPlaneta.definirPosicion(1,2);
            tercerPlaneta.definirPosicion(1,3);

            //Defino el angulo
            planeta.definirAngulo(45);
            otroPlaneta.definirAngulo(135);
            tercerPlaneta.definirAngulo(180);

            assert.isFalse(Service.existePeriodoDeSequia(planeta,otroPlaneta,tercerPlaneta));
        });

        it('3 planetas: 2 planetas  alineados a 45 grados y el restante en su posicion original,  devuelve no existe sequia', function () {

            //Setup
            let {planeta, otroPlaneta, tercerPlaneta} = setUpPlanetas();

            //Defino el angulo
            planeta.definirAngulo(45);
            otroPlaneta.definirAngulo(45);


            assert.isFalse(Service.existePeriodoDeSequia(planeta,otroPlaneta,tercerPlaneta));
        });

        it('3 planetas: 2 planetas alineados 225, y el restante a 45  devuelve existe sequia y no condiciones optimas', function () {

            //Setup
            let {planeta, otroPlaneta, tercerPlaneta} = setUpPlanetas();

            //Posicionamiento dado
            planeta.definirPosicion(2,2);
            otroPlaneta.definirPosicion(-3,-3);
            tercerPlaneta.definirPosicion(-2,-2);

            //Defino el angulo
            planeta.definirAngulo(45);
            otroPlaneta.definirAngulo(225);
            tercerPlaneta.definirAngulo(225);

            assert.isTrue(Service.existePeriodoDeSequia(planeta,otroPlaneta,tercerPlaneta));
        });

        it('3 planetas: 2 planetas alineados 135, y el restante a 180, devuelve no existe sequia ', function () {

            //Setup
            let {planeta, otroPlaneta, tercerPlaneta} = setUpPlanetas();

            //Posicionamiento dado
            planeta.definirPosicion(-2,2);
            otroPlaneta.definirPosicion(-3,3);
            tercerPlaneta.definirPosicion(2,-2);

            //Defino el angulo
            planeta.definirAngulo(135);
            otroPlaneta.definirAngulo(135);
            tercerPlaneta.definirAngulo(180);

            assert.isFalse(Service.existePeriodoDeSequia(planeta,otroPlaneta,tercerPlaneta));
        });

        it('3 planetas: alineados a x=1   devuelve existe sequia ', function () {

            //Setup
            let {planeta, otroPlaneta, tercerPlaneta} = setUpPlanetas();

            //Posicionamiento dado
            planeta.definirPosicion(1,1.73);
            otroPlaneta.definirPosicion(1,0);
            tercerPlaneta.definirPosicion(1,-1.73);

            //Defino el angulo
            planeta.definirAngulo(60);
            otroPlaneta.definirAngulo(0);
            tercerPlaneta.definirAngulo(315);

            assert.isFalse(Service.existePeriodoDeSequia(planeta,otroPlaneta,tercerPlaneta));
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