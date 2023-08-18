const express = require('express')
const routes = express.Router()
const jokesController = require('../controladores/jokes.controller')

module.exports = (app) => {
// Ruta para obtener todos los chistes
    app.get('/chistes', jokesController.getAllJokes);
// Ruta para obtener un chiste por su ID
    app.get('/chistes/:id', jokesController.getJokeById);
// Ruta para crear un nuevo chiste
    app.post('/chistes', jokesController.createJoke);
// Ruta para actualizar un chiste por su ID
    app.put('/chistes/:id', jokesController.updateJokeById);
// Ruta para eliminar un chiste por su ID
    app.delete('/chistes/:id', jokesController.deleteJokeById);
    
// Rutas rápidas utilizando las funciones controladoras importadas
app.get('/chistes/obtenerTodos', jokesController.getAllJokes);
app.get('/chistes/obtener/:id', jokesController.getJokeById);
app.post('/chistes/crear', jokesController.createJoke);
app.put('/chistes/actualizar/:id', jokesController.updateJokeById);
app.delete('/chistes/eliminar/:id', jokesController.deleteJokeById);
};