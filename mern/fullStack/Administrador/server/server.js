const express = require('express');
const productRoutes = require('./routes/admin.routes');

const app = express();

// Conexión a la base de datos
require('./config/mongoose.config'); // No necesitas el .js al final

// Middleware para el manejo de datos JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas de productos
app.use('/api', productRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
