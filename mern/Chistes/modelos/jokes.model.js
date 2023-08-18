const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  // Otros campos que quieras agregar a tu modelo
});

const Joke = mongoose.model("Joke", jokeSchema);

module.exports = Joke;
