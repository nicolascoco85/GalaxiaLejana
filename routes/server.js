const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const service = require('../Service/ReporteService');
const DB = require('../Model/baseDeDatos');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../config/swagger.js');


const options = {
    explorer: true,// habilita el explorar para hacer busquedas
    swaggerOptions: {
        validatorUrl: null
    },
   // customCss: '.swagger-ui .topbar { display: none }'// Desactiva el la cabecera que dice swagguer ui
};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument,options));


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
            message:'El dia ingresado es invalido (--->' + request.query.dia + '<---)'
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