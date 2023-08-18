const express = require('express');
const app = express();

// Requiere la configuración de la base de datos
require('./configuracion/mongoose.config');

// Enabling settings for being able to read JSON and parse url encoded data in requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 5) Importing API routes passing the Express instance 'app'
const jokesRoutes = require('./rutas/jokes.routes');
jokesRoutes(app);

// 6) Running instance of Express server in selected port
app.listen(8000, () => {
    console.log("Estamos andando");
})