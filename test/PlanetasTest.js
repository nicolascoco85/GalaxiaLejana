const Planeta = require('../Model/Planeta');
let assert = require('assert');

describe('Posiciones y Rotaciones de los planetas', function() {
    describe('Posicion del planeta', function() {

        it('Planeta en la posicion 1,0, retorna el valor 1 para la coordenada en X ', function() {

            //Setup
            let planeta = new Planeta(1, 1);

            assert.equal(planeta.obtenerPosicionX(), 1);
        });

        it('Planeta en la posicion 1,0, retorna el valor 0 para la coordenada en Y', function() {

            //Setup
            let planeta = new Planeta(1, 1);

            assert.equal(planeta.obtenerPosicionY(), 0);
        });

        it('Planeta en un radio de 1 con respecto al sol, retorna el 1 para el valor del radio', function() {

            //Setup
            let planeta = new Planeta(1, 1);

            assert.equal(planeta.obtenerRadio(), 1);
        });

        it('Planeta en su estado inicial con respecto al sol, retorna 0 como angulo incial', function() {

            //Setup
            let planeta = new Planeta(1, 1);

            assert.equal(planeta.obtenerAngulo(), 0);
        });

        it('Planeta en su estado inicial con respecto al sol, se modifica a la coordenada 2.0, retorna 2 para el valor en X', function() {

            //Setup
            let planeta = new Planeta(1, 1);

            //Accion
            planeta.definirPosicion(2, 0);

            assert.equal(planeta.obtenerPosicionX(), 2);
        });

        it('Planeta en su estado inicial con respecto al sol, se modifica a la coordenada 0.2, retorna 2 para el valor en Y', function() {

            //Setup
            let planeta = new Planeta(1, 1);

            //Accion
            planeta.definirPosicion(0, 2);

            assert.equal(planeta.obtenerPosicionY(), 2);
        });
    });
    describe('Rotacion del planeta', function() {
        it('Planeta en su estado inicial y velocidad angular 1, al cabo de un 90 dias, retorna un angulo de 90 grados', function() {

            //Setup
            let planeta = new Planeta(1, 1);

            //Accion
            planeta.calcularPosicion(90);

            assert.equal(planeta.obtenerAngulo(), 90);
        });

        it('Planeta en su estado inicial y velocidad angular -1, al cabo de un 90 dias, retorna un angulo de -90 grados', function() {

            //Setup
            let planeta = new Planeta(1, -1);

            //Accion
            planeta.calcularPosicion(90);

            assert.equal(planeta.obtenerAngulo(), -90);
        });

        it('Planeta en su estado inicial y velocidad angular 1, al cabo de un 180 dias, retorna un angulo de 90 grados', function() {

            //Setup
            let planeta = new Planeta(1, 1);

            //Accion
            planeta.calcularPosicion(180);

            assert.equal(planeta.obtenerAngulo(), 180);
        });

        it('Planeta en su estado inicial y velocidad angular -1, al cabo de un 180 dias, retorna un angulo de -90 grados', function() {

            //Setup
            let planeta = new Planeta(1, -1);

            //Accion
            planeta.calcularPosicion(180);

            assert.equal(planeta.obtenerAngulo(), -180);
        });

        it('Planeta en su estado inicial, velocidad angular 1 y radio 1, al cabo de un 90 dias, retorna su coordenada en x igual a 0', function() {

            //Setup
            let planeta = new Planeta(1, 1);

            //Accion
            planeta.calcularPosicion(90);

            assert.equal(planeta.obtenerPosicionX(), 0);
        });

        it('Planeta en su estado inicial y velocidad angular -1, al cabo de un 90 dias, retorna su coordenada en x igual a 0', function() {

            //Setup
            let planeta = new Planeta(1, -1);

            //Accion
            planeta.calcularPosicion(90);

            assert.equal(planeta.obtenerPosicionX(), 0);
        });

        it('Planeta en su estado inicial, velocidad angular 1 y radio 1, al cabo de un 90 dias, retorna su coordenada en y igual a 1', function() {

            //Setup
            let planeta = new Planeta(1, 1);

            //Accion
            planeta.calcularPosicion(90);

            assert.equal(planeta.obtenerPosicionY(), 1);
        });

        it('Planeta en su estado inicial y velocidad angular -1, al cabo de un 90 dias, retorna su coordenada en y igual a -1', function() {

            //Setup
            let planeta = new Planeta(1, -1);

            //Accion
            planeta.calcularPosicion(90);

            assert.equal(planeta.obtenerPosicionY(), -1);
        });

        it('Planeta en su estado inicial y velocidad angular -1, al cabo de un 90 dias, retorna su coordenada en x igual a 0', function() {

            //Setup
            let planeta = new Planeta(1, -1);

            //Accion
            planeta.calcularPosicion(90);

            assert.equal(planeta.obtenerPosicionX(), 0);
        });

        it('Planeta en su estado inicial, velocidad angular 1 y radio 1, al cabo de un 45 dias, retorna su coordenada en y igual a 0.71', function() {

            //Setup
            let planeta = new Planeta(1, 1);

            //Accion
            planeta.calcularPosicion(45);

            assert.equal(planeta.obtenerPosicionY(), 0.71);
        });

        it('Planeta en su estado inicial y velocidad angular -1, al cabo de un 45 dias, retorna su coordenada en y igual a -0.71', function() {

            //Setup
            let planeta = new Planeta(1, -1);

            //Accion
            planeta.calcularPosicion(45);

            assert.equal(planeta.obtenerPosicionY(), -0.71);
        });

        it('Planeta en su estado inicial, velocidad angular 1 y radio 1, al cabo de un 45 dias, retorna su coordenada en x igual a 0.71', function() {

            //Setup
            let planeta = new Planeta(1, 1);

            //Accion
            planeta.calcularPosicion(45);

            assert.equal(planeta.obtenerPosicionX(), 0.71);
        });

        it('Planeta en su estado inicial y velocidad angular -1, al cabo de un 45 dias, retorna su coordenada en x igual a -0.71', function() {

            //Setup
            let planeta = new Planeta(1, -1);

            //Accion
            planeta.calcularPosicion(45);

            assert.equal(planeta.obtenerPosicionX(), 0.71);
        });

    });
});