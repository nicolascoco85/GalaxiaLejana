const express = require('express');
const app = express();
const bodyParser = require('body-parser');
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
    if (service.esDiaValido(request)){
        response.json(await service.obtenerClima(request.query.dia));
    } else {
        response.status(400).send({
            message:'El dia ingresado es invalido'
        });
    }
});

app.get('/reporte', async (request, response) => {
    response.json(await service.obtenerReporte());
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Escuchando en localhost:"+port);
    DB.conectarDB();
});