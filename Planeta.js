class Planeta
{

    constructor(radio, velocidad){
        this.radio=radio;
        this.velocidad=velocidad;
        this.x=radio;
        this.y=0;
        this.angulo=0;
    }

    obtenerPosicionX(){
        return this.x;
    }

    obtenerPosicionY(){
        return this.y;
    }

    obtenerAngulo(){
        return this.angulo;
    }

    obtenerRadio(){
        return this.radio;
    }

    definirPosicion(x,y){
        this.x=x;
        this.y=y;
    }

    calcularPosicion(dias){
        const GRADOS_POR_VUELTA=360;
        const RADIANES_POR_GRADO=0.0174533;
        this.angulo= ((this.velocidad * dias) % GRADOS_POR_VUELTA);
        this.x=this.radio* Math.cos(this.angulo*RADIANES_POR_GRADO).toFixed(2);
        this.y=this.radio* Math.sin(this.angulo*RADIANES_POR_GRADO).toFixed(2);
    }
}

module.exports = Planeta;

