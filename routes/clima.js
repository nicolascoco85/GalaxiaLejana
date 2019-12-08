const express = require('express');
const app = express();
const service = require('../Service/ReporteService');

/* GET home page. */
app.get('/clima', (request, response)=> {
    let dia=0
    if (request.query){
        dia= request.query.dia;
    }
   response.json(service.obtenerClima(dia));
});

app.listen('8080',() =>{
    console.log("EScuchando en localhost:8080/clima");
});

