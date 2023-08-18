const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost/chistesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
mongoose.connection.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

// Configuración de modelos y esquemas
const chisteSchema = new mongoose.Schema({
  texto: String,
  autor: String,
});

const Chiste = mongoose.model('Chiste', chisteSchema);

app.use(express.json());

// Rutas
app.get('/chistes', async (req, res) => {
  try {
    const chistes = await Chiste.find();
    res.json(chistes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/chistes', async (req, res) => {
  const chiste = new Chiste({
    texto: req.body.texto,
    autor: req.body.autor,
  });
  try {
    const nuevoChiste = await chiste.save();
    res.status(201).json(nuevoChiste);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/chistes/:id', async (req, res) => {
  try {
    const chiste = await Chiste.findByIdAndDelete(req.params.id);
    if (!chiste) {
      res.status(404).json({ message: 'Chiste no encontrado' });
      return;
    }
    res.json({ message: 'Chiste eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
