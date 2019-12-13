const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const service = require('../Service/ReporteService');
const Prediccion = require('../Model/prediccion').Prediccion;
const DB = require('../Model/baseDeDatos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:true}));

function handleError(res, err) {
    return res.send(500, err);
}


app.get('/', (request, response)=> {
    response.json({API: 'GALAXIA LEJANA'});
});

app.get('/clima', (request, response)=> {
    var dia=0
    if (request.query){
        dia= request.query.dia;
    }

   Prediccion.find({dia:dia},"dia clima",function (err,docs) {
        console.log(docs);
        response.json(docs);
    });
});

app.get('/dias', (request, response)=> {
    var clima="Normal"
    if (request.query){
        clima= request.query.clima;
    }

    Prediccion.find({clima:clima},"dia clima",function (err,docs) {
        console.log(docs);
        response.json(docs);
    });
});



app.get('/reporte', (request, response)=> {
    response.json(service.obtenerReporte());
});

app.get('/borrarBase', (request, response)=> {
    response.json(DB.borrarBase());
});

app.get('/conectarBase', (request, response)=> {
    response.json(DB.conectarDB());
});

app.get('/cargarBase', (request, response)=> {
    response.json(DB.cargarDB(Prediccion));
});

app.listen('8080',() =>{
    console.log("Escuchando en localhost:8080/");
    DB.conectarDB();
});

