const Joke = require('../modelos/jokes.model');

// Función controladora para obtener todos los chistes
exports.getAllJokes = async (req, res) => {
    try {
        const jokes = await Joke.find();
        res.status(200).json(jokes);
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al obtener los chistes.' });
    }
};
// Función controladora para obtener un chiste por su ID
exports.getJokeById = async (req, res) => {
    try {
        const joke = await Joke.findById(req.params.id);
        if (!joke) {
        return res.status(404).json({ error: 'Chiste no encontrado.' });
    }
    res.json(joke);
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al obtener el chiste.' });
    }
};
// Función controladora para crear un nuevo chiste
exports.createJoke = async (req, res) => {
    try {
        const { text, category } = req.body;
        const newJoke = new Joke({ text, category });
        const savedJoke = await newJoke.save();
        res.status(201).json(savedJoke);
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al crear el chiste.' });
    }
};
// Función controladora para actualizar un chiste por su ID
exports.updateJokeById = async (req, res) => {
    try {
        const { text, category } = req.body;
        const updatedJoke = await Joke.findByIdAndUpdate(req.params.id, { text, category }, { new: true });
        if (!updatedJoke) {
            return res.status(404).json({ error: 'Chiste no encontrado.' });
        }
        res.json(updatedJoke);
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al actualizar el chiste.' });
    }
};
// Función controladora para eliminar un chiste por su ID
exports.deleteJokeById = async (req, res) => {
    try {
        const deletedJoke = await Joke.findByIdAndDelete(req.params.id);
        if (!deletedJoke) {
            return res.status(404).json({ error: 'Chiste no encontrado.' });
        }
        res.json({ message: 'Chiste eliminado exitosamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al eliminar el chiste.' });
    }
};