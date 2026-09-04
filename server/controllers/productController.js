const Product = require('../models/Product');
const { getIsConnected } = require('../config/db');
let { initialProducts } = require('../data/seedData');

let memoryProducts = [...initialProducts];

exports.getProducts = async (req, res) => {
  try {
    const { category, search } = req.query;
    if (getIsConnected()) {
      let count = await Product.countDocuments();
      if (count === 0) {
        console.log('Seeding initial products into MongoDB...');
        await Product.insertMany(initialProducts.map(({ _id, ...rest }) => rest));
      }

      let query = {};
      if (category && category !== 'All') query.category = category;
      if (search) query.name = { $regex: search, $options: 'i' };
      const products = await Product.find(query).sort({ createdAt: -1 });
      return res.json(products);
    }
    
    let filtered = [...memoryProducts];
    if (category && category !== 'All') {
      filtered = filtered.filter(p => p.category === category);
    }
    if (search) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.vendor.toLowerCase().includes(search.toLowerCase()));
    }
    res.json(filtered);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    if (getIsConnected()) {
      const newProduct = new Product(req.body);
      const saved = await newProduct.save();
      return res.status(201).json(saved);
    }
    
    const newProduct = {
      _id: 'p_' + Date.now(),
      ...req.body,
      price: Number(req.body.price),
      stock: Number(req.body.stock),
      createdAt: new Date().toISOString()
    };
    memoryProducts.unshift(newProduct);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: 'Error creating product', error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (getIsConnected()) {
      const updated = await Product.findByIdAndUpdate(id, req.body, { new: true });
      if (!updated) return res.status(404).json({ message: 'Product not found' });
      return res.json(updated);
    }
    
    const index = memoryProducts.findIndex(p => p._id === id);
    if (index === -1) return res.status(404).json({ message: 'Product not found' });
    memoryProducts[index] = { ...memoryProducts[index], ...req.body };
    res.json(memoryProducts[index]);
  } catch (err) {
    res.status(400).json({ message: 'Error updating product', error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (getIsConnected()) {
      const deleted = await Product.findByIdAndDelete(id);
      if (!deleted) return res.status(404).json({ message: 'Product not found' });
      return res.json({ message: 'Product deleted', id });
    }
    
    const index = memoryProducts.findIndex(p => p._id === id);
    if (index === -1) return res.status(404).json({ message: 'Product not found' });
    memoryProducts.splice(index, 1);
    res.json({ message: 'Product deleted', id });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting product', error: err.message });
  }
};
