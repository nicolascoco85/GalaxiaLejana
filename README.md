# Galaxia Lejana

Galaxia Lejana api challenge by Nicolas Alberto Coco

## Enunciado

En una galaxia lejana, existen tres civilizaciones. Vulcanos, Ferengis y Betasoides. Cada civilización vive en paz en su respectivo planeta.

Dominan la predicción del clima mediante un complejo sistema informático. A continuación el diagrama del sistema solar.

Premisas:

    El planeta Ferengi se desplaza con una velocidad angular de 1 grados/día en sentido horario. Su distancia con respecto al sol es de 500Km.
    El planeta Betasoide se desplaza con una velocidad angular de 3 grados/día en sentido horario. Su distancia con respecto al sol es de 2000Km.
    El planeta Vulcano se desplaza con una velocidad angular de 5 grados/día en sentido anti­horario, su distancia con respecto al sol es de 1000Km.
    Todas las órbitas son circulares. Cuando los tres planetas están alineados entre sí y a su vez alineados con respecto al sol, el sistema solar experimenta un período de sequía.

Cuando los tres planetas no están alineados, forman entre sí un triángulo. Es sabido que en el momento en el que el sol se encuentra dentro del triángulo, el sistema solar experimenta un período de lluvia, teniendo éste, un pico de intensidad cuando el perímetro del triángulo está en su máximo.

Las condiciones óptimas de presión y temperatura se dan cuando los tres planetas están alineados entre sí pero no están alineados con el sol.

Realizar un programa informático para poder predecir en los próximos 10 años:

    ¿Cuántos períodos de sequía habrá?
    ¿Cuántos períodos de lluvia habrá y qué día será el pico máximo de lluvia?
    ¿Cuántos períodos de condiciones óptimas de presión y temperatura habrá?

Bonus:

Para poder utilizar el sistema como un servicio a las otras civilizaciones, los Vulcanos requieren tener una base de datos con las condiciones meteorológicas de todos los días y brindar una API REST de consulta sobre las condiciones de un día en particular.

    Generar un modelo de datos con las condiciones de todos los días hasta 10 años en adelante utilizando un job para calcularlas.
    Generar una API REST la cual devuelve en formato JSON la condición climática del día consultado.
    Hostear el modelo de datos y la API REST en un cloud computing libre (como APP Engine o Cloudfoudry) y enviar la URL para consulta:

Ej: GET → http://....../clima?dia=566 → Respuesta: {“dia”:566, “clima”:”lluvia”}

## Hipotesis y Supuestos

* Los tres planetas parten del eje positivo de X con distintos radios y un angulo 0 Grados.
* Para los 3 planetas los dias tienen la misma duracion, es decir, un dia en el planeta Vulcano dura lo mismo que un dia en Ferengis o en Betasoide.
* Las orbitas de los planetas son circunferencias de radio fijo.
* En ningun momento cambian de orbita.
* Se considera que el Sol se ubica en el origen de coordenadas 0,0.
* Ningun planeta puede ubicarse en la posicion de sol.
* El modelo de sistema solar considera a todos los astros participantes son puntos sin masa.
* Los movimientos de cada uno de los astros son independientes del resto.
* Se considera anti-horario en el sentido contrario a la agujas del reloj.
* Se considera que un 1 año = 360 días.
* Consideramos que a parte de los 3 periodos descriptos en el enunciado, existe un cuarto, que llamamos "Normal" que se trata de todo aquel periodo que no cummple con ninguna de las condiciones de establecidas en los otros tres periodos.
* Los periodos se evaluan diariamente en nuestro sistema solar.
* En el caso que los planetas forman un triangulo, consideramos que el Sol se encuentra adentro, para el caso donde el Sol pertenezca a uno de los lados que conforma el triangulo, dado que, un punto es parte de la recta que lo contiene por definicion.

## Caracteristicas de la aplicacion

Es una aplicacion en NodeJS, Express, MongoDB, Moongose, Chai, Mocha.
La misma se encuentra deployada en HEROKU en la siguiente direccion:

https://galaxia-lejana.herokuapp.com/

* Nota: Debido a que la aplicacion se encuentra alojada gratuitamente en HEROKU, el primer request demora un tiempo extra debido a que el free Dyno tiene que "despertarse".

## Requisitos

Esta apliacion requiere que tengas instalado localmente

* [NodeJS](https://nodejs.org/es/) 
* [MongoDB](https://www.mongodb.com/cloud/atlas/signup) 



## Comenzando

Luego de clonar el repositorio, ejecutar:

`1. Instalacion de Dependencias:`
```
$ npm i
```
`2. Configuracion Local de MongoDB`

Se requiere editar el archivo config/config.js y modificar el string de conexion a la base local deseada.

```
var config = {
    MONGODB_URI: process.env.MONGODB_URI ? process.env.MONGODB_URI : "mongodb://localhost/test",
    ...
};
```
`3. Generacion de Reportes`

Se debe ejecutar el job encargado de calcular las predicciones de los proximos 10 anios, que seran almacenadas en la base de datos local.

``` 
npm run generarReporte 
```

Obteniendo:

```
El reporte ha sido cargado

```

`4. Inicio de la API:`

```
npm start
```

Obteniendo:

```
Escuchando en localhost:8080
MongoDB conectada!

```





### Interfaces

Operacion: GET

### Obtencion de la prediccion

**/reporte**

`Resultado esperado:`

```
 cantidadDeDiasSequia :41
 cantidadDeDiasLluvia :720
 picoMaximoLluvia :6262.31
 picoMaximoLluviaDia :108
 cantidadDeDiasCondicionesOptimas :0

```
**/clima?dia=:dia**

`Resultado esperado:`

```
"dia":"108"
"clima":"Lluvia"
```

## Ejecucion de pruebas

```
npm test
```

`Resultados esperados:`

```
  Determinacion del Periodo en la Galaxia Lejana
    Alineacion de planetas
      ✓ 3 planetas  con su posicion de original ,  devuelve que  existe sequia 
      ✓ 3 planetas sobre el eje de Y,  devuelve que existe sequia
      ✓ 3 planetas: 2 planetas  alineados a 45 grados y el restante a 225,  devuelve existe sequia y no condiciones optimas
      ✓ 3 planetas: 2 planetas alineados 225, y el restante a 45  devuelve existe sequia 
      ✓ 3 planetas: 2 planetas alineados 135, y el restante a 315   devuelve existe sequia 
      ✓ 3 planetas: 1 planetas alineados 135, y los 2 restante a 315   devuelve existe sequia 
      ✓ 3 planetas: alineados a 320 , devuelve existe sequia 
      ✓ 3 planetas: 2 con su posicion de original y el restante a 10 grados,  devuelve que no existe sequia 
      ✓ 3 planetas: cada uno con angulos escalonados a 10 grados, devuelve que no existe sequia
      ✓ 3 planetas: a 45, 135 y 180 grados respectivamente ,  devuelve que no existe sequia
      ✓ 3 planetas: 2 planetas  alineados a 45 grados y el restante en su posicion original,  devuelve no existe sequia
      ✓ 3 planetas: 2 planetas alineados 225, y el restante a 45  devuelve existe sequia y no condiciones optimas
      ✓ 3 planetas: 2 planetas alineados 135, y el restante a 180, devuelve no existe sequia 
      ✓ 3 planetas: alineados a x=1   devuelve existe sequia 
      ✓ 3 planetas sobre con posicion x=6 ,  devuelve que existen condiones optimas
      ✓ 3 planetas: alineados a x=1   devuelve que  existen condiones optimas 
      ✓ 3 planetas: alineados a Y=1   devuelve que  existen condiones optimas 
      ✓ 3 planetas: alineados a Y=0   devuelve que no existen condiones optimas 
      ✓ 3 planetas: alineados a X=0   devuelve que no existen condiones optimas 
      ✓ 3 planetas: alineados a X=0   devuelve que no existen condiones optimas 
      ✓ 3 planetas: forman un triangulo alrededor del sol , returna que existe Luvia
      ✓ 3 planetas: forman un triangulo pasando por el sol , returna que existe Luvia
      ✓ 3 planetas: forman un triangulo pasando por el sol , returna el perimetro formado

  Posiciones y Rotaciones de los planetas
    Posicion del planeta
      ✓ Planeta en la posicion 1,0, retorna el valor 1 para la coordenada en X 
      ✓ Planeta en la posicion 1,0, retorna el valor 0 para la coordenada en Y
      ✓ Planeta en un radio de 1 con respecto al sol, retorna el 1 para el valor del radio
      ✓ Planeta en su estado inicial con respecto al sol, retorna 0 como angulo incial
      ✓ Planeta en su estado inicial con respecto al sol, se modifica a la coordenada 2.0, retorna 2 para el valor en X
      ✓ Planeta en su estado inicial con respecto al sol, se modifica a la coordenada 0.2, retorna 2 para el valor en Y
    Rotacion del planeta
      ✓ Planeta en su estado inicial y velocidad angular 1, al cabo de un 90 dias, retorna un angulo de 90 grados
      ✓ Planeta en su estado inicial y velocidad angular -1, al cabo de un 90 dias, retorna un angulo de -90 grados
      ✓ Planeta en su estado inicial y velocidad angular 1, al cabo de un 180 dias, retorna un angulo de 90 grados
      ✓ Planeta en su estado inicial y velocidad angular -1, al cabo de un 180 dias, retorna un angulo de -90 grados
      ✓ Planeta en su estado inicial, velocidad angular 1 y radio 1, al cabo de un 90 dias, retorna su coordenada en x igual a 0
      ✓ Planeta en su estado inicial y velocidad angular -1, al cabo de un 90 dias, retorna su coordenada en x igual a 0
      ✓ Planeta en su estado inicial, velocidad angular 1 y radio 1, al cabo de un 90 dias, retorna su coordenada en y igual a 1
      ✓ Planeta en su estado inicial y velocidad angular -1, al cabo de un 90 dias, retorna su coordenada en y igual a -1
      ✓ Planeta en su estado inicial y velocidad angular -1, al cabo de un 90 dias, retorna su coordenada en x igual a 0
      ✓ Planeta en su estado inicial, velocidad angular 1 y radio 1, al cabo de un 45 dias, retorna su coordenada en y igual a 0.71
      ✓ Planeta en su estado inicial y velocidad angular -1, al cabo de un 45 dias, retorna su coordenada en y igual a -0.71
      ✓ Planeta en su estado inicial, velocidad angular 1 y radio 1, al cabo de un 45 dias, retorna su coordenada en x igual a 0.71
      ✓ Planeta en su estado inicial y velocidad angular -1, al cabo de un 45 dias, retorna su coordenada en x igual a -0.71


  42 passing (27ms)

```


