const express = require('express');
const app = express();
const { mostrarEstadoPerros, mostrarEstadoGatos, agregarMascota } = require('./controller.js');
const { mascotas } = require('./recursos/mascotas.js');
const PUERTO = 3000;
const HOST = '127.0.0.1';

app.get('/', (req, res) => {
    res.status(200);
    res.send(`<h1> ¡Bienvenido al servidor del primer parcial de -Kevin Alberto Villarreal-! </h1>`);
})

app.get('/perros', (req, res) => {
    console.log("Accediendo a '/perros' ");
    mostrarEstadoPerros()
        .then(
            (response) => {
                console.log(response);
                res.status(200);
                res.json(response.body)
            }
        ).catch(
            (error) => {
                res.status(400);
                res.send(`<h1>${error.message}</h1>`);
                console.log(error.message)
            }
        )
})

app.get('/gatos', (req, res) => {
    console.log("Accediendo a '/gatos' ");
    mostrarEstadoGatos()
        .then(
            (response) => {
                console.log(response);
                res.status(200);
                res.send(response.body)
            }
        ).catch(
            (error) => {
                res.status(400);
                res.send(`<h1>${error.message}</h1>`);
                console.log(error.message);
            }
        )
})

app.get('/perros/agregar/:nuevoPerro', (req, res) => {
    const nuevoPerro = req.params.nuevoPerro
    console.log("Accediendo a '/perros/agregar' ");
    
    agregarMascota(nuevoPerro)
        .then(
            (response) => {
                console.log(response)
                res.status(200)
                res.send(mascotas.perros)
            }
        ).catch(
            (error) => {
                res.status(400);
                res.send(`<h1>${error}</h1>`);
                console.log(error);
            }
        )

})
app.listen(PUERTO, HOST, () => { //Listen "metodo que escucha". (Primero se pasa el PORT y luego el HOSTNAME) si esto no se cumple, no funciona.
    console.log(`Servidor corriendo en localhost: http://${HOST}:${PUERTO}`.bgCyan); //El servicio está esperando solicitudes de entrada por que está "escuchando"
});