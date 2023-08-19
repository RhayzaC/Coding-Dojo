const Product = require('../models/model.js');

const createProduct = async (req, res) => {
    try {
    const { title, price, description } = req.body;
    const newProduct = new Product({ title, price, description });
    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully', product: newProduct });
} catch (error) {
    res.status(500).json({ message: 'Error creating product', error: error.message });
}
};

module.exports = {createProduct,};
