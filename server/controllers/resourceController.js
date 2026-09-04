const Resource = require('../models/Resource');
const { getIsConnected } = require('../config/db');
let { initialResources, initialMarketPrices } = require('../data/seedData');

let memoryResources = [...initialResources];
let memoryPrices = [...initialMarketPrices];

exports.getResources = async (req, res) => {
  try {
    const { category, search } = req.query;
    if (getIsConnected()) {
      let count = await Resource.countDocuments();
      if (count === 0) {
        console.log('Seeding initial resources into MongoDB...');
        await Resource.insertMany(initialResources.map(({ _id, ...rest }) => rest));
      }

      let query = {};
      if (category && category !== 'All') query.category = category;
      if (search) query.title = { $regex: search, $options: 'i' };
      const resources = await Resource.find(query).sort({ createdAt: -1 });
      return res.json(resources);
    }
    
    let filtered = [...memoryResources];
    if (category && category !== 'All') {
      filtered = filtered.filter(r => r.category === category);
    }
    if (search) {
      filtered = filtered.filter(r => r.title.toLowerCase().includes(search.toLowerCase()) || r.summary.toLowerCase().includes(search.toLowerCase()));
    }
    res.json(filtered);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching resources', error: err.message });
  }
};

exports.createResource = async (req, res) => {
  try {
    if (getIsConnected()) {
      const newRes = new Resource(req.body);
      const saved = await newRes.save();
      return res.status(201).json(saved);
    }
    
    const newRes = {
      _id: 'r_' + Date.now(),
      ...req.body,
      createdAt: new Date().toISOString()
    };
    memoryResources.unshift(newRes);
    res.status(201).json(newRes);
  } catch (err) {
    res.status(400).json({ message: 'Error creating resource', error: err.message });
  }
};

exports.deleteResource = async (req, res) => {
  try {
    const { id } = req.params;
    if (getIsConnected()) {
      const deleted = await Resource.findByIdAndDelete(id);
      if (!deleted) return res.status(404).json({ message: 'Resource not found' });
      return res.json({ message: 'Resource deleted', id });
    }
    
    const index = memoryResources.findIndex(r => r._id === id);
    if (index === -1) return res.status(404).json({ message: 'Resource not found' });
    memoryResources.splice(index, 1);
    res.json({ message: 'Resource deleted', id });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting resource', error: err.message });
  }
};

exports.getMarketPrices = (req, res) => {
  res.json(memoryPrices);
};
