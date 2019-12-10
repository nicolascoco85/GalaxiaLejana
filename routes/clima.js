const express = require('express');
const app = express();
const service = require('../Service/ReporteService');

/* GET home page. */
app.get('/', (request, response)=> {

    response.json({API: 'GALAXIA LEJANA'});
});

app.get('/clima', (request, response)=> {
    let dia=0
    if (request.query){
        dia= request.query.dia;
    }
   response.json(service.obtenerClima(dia));
});

app.get('/reporte', (request, response)=> {
    response.json(service.obtenerReporte());
});

app.listen('8080',() =>{
    console.log("EScuchando en localhost:8080/");
});

