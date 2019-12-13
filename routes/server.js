const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const service = require('../Service/ReporteService');
const DB = require('../Model/baseDeDatos');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (request, response) => {
    response.json({
        API: 'GALAXIA LEJANA'
    });
});

app.get('/clima', async (request, response) => {
    let dia = 0;
    if (request.query) {
        dia = request.query.dia;
    }
    response.json(await service.obtenerClima(dia));
});

app.get('/reporte', async (request, response) => {
    response.json(await service.obtenerReporte());
});

app.listen('8080', () => {
    console.log("Escuchando en localhost:8080");
    DB.conectarDB();
});