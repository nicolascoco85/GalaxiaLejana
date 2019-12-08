# GalaxiaLejana
Rotacion de panetas y periodos // Vulcanos-Ferengis-Betasoides


Galaxia Lejana api challenge by Nicolas Alberto Coco

Interface

GET:

GET → http://....../clima?dia=566 → Respuesta: {“dia”:566, “clima”:”lluvia”}

 

Comenzar Prediccion en los 10 proximos anios:

Luego de clonar el repositorio, ejecutar:

$ npm start

Se debe poder observar el siguiente reporte:

Reporte para los próximos 10 años: 
Cantidad de Periodos de sequia: 41
Cantidad de Periodos de lluvia: 720 Pico Maximo: 6262.31 Dia: 108
Cantidad de Periodos de condiciones optimas de presion y temperatura: 20



Ejecucion de los test:

$ cd [tu_proyecto]
$ npm test

Debes obtener los siguientes resultados:

 Determinacion del Periodo en la Galaxia Lejana
    Alineacion de planetas
      ✓ 3 planetas  con su posicion de original ,  devuelve que  existe sequia 
      ✓ 3 planetas en su posicion original son trasladados en una unidad, devuelve que existe sequia
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

