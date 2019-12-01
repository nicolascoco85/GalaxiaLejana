class Planeta
{
    constructor(radio, velocidad,x,y){
        this.radio=radio;
        this.velocidad=velocidad;
        this.x=x;
        this.y=y;
        this.angulo=0;
    }

    obtenerPosicionX(){
        return this.x;
    }

    ObtenerPosicionY(){
        return this.y;
    }

    obtenerAngulo(){
        return this.angulo;
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

