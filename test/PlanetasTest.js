const Planeta = require('../Planeta');
let assert = require('assert');

describe('Posiciones y Rotaciones de los planetas', function() {
    describe('Posicion del planeta', function() {
        it('Planeta en la posion 1,0, retorna verdadero cuando la posicion en x es 1', function() {
            let planeta = new Planeta(1,1,1,0);
            assert.equal(planeta.obtenerPosicionX(), 1);
        });
    });
});
