const Service = require('../models/Service');
const { getIsConnected } = require('../config/db');
let { initialServices } = require('../data/seedData');

let memoryServices = [...initialServices];

exports.getServices = async (req, res) => {
  try {
    const { category, search } = req.query;
    if (getIsConnected()) {
      let count = await Service.countDocuments();
      if (count === 0) {
        console.log('Seeding initial services into MongoDB...');
        await Service.insertMany(initialServices.map(({ _id, ...rest }) => rest));
      }

      let query = {};
      if (category && category !== 'All') query.category = category;
      if (search) query.title = { $regex: search, $options: 'i' };
      const services = await Service.find(query).sort({ createdAt: -1 });
      return res.json(services);
    }
    
    let filtered = [...memoryServices];
    if (category && category !== 'All') {
      filtered = filtered.filter(s => s.category === category);
    }
    if (search) {
      filtered = filtered.filter(s => (s.title || s.name || '').toLowerCase().includes(search.toLowerCase()) || s.provider.toLowerCase().includes(search.toLowerCase()));
    }
    res.json(filtered);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching services', error: err.message });
  }
};

exports.createService = async (req, res) => {
  try {
    if (getIsConnected()) {
      const newService = new Service(req.body);
      const saved = await newService.save();
      return res.status(201).json(saved);
    }
    
    const newService = {
      _id: 's_' + Date.now(),
      ...req.body,
      pricePerDay: Number(req.body.pricePerDay),
      createdAt: new Date().toISOString()
    };
    memoryServices.unshift(newService);
    res.status(201).json(newService);
  } catch (err) {
    res.status(400).json({ message: 'Error creating service', error: err.message });
  }
};

exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;
    if (getIsConnected()) {
      const updated = await Service.findByIdAndUpdate(id, req.body, { new: true });
      if (!updated) return res.status(404).json({ message: 'Service not found' });
      return res.json(updated);
    }
    
    const index = memoryServices.findIndex(s => s._id === id);
    if (index === -1) return res.status(404).json({ message: 'Service not found' });
    memoryServices[index] = { ...memoryServices[index], ...req.body };
    res.json(memoryServices[index]);
  } catch (err) {
    res.status(400).json({ message: 'Error updating service', error: err.message });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    if (getIsConnected()) {
      const deleted = await Service.findByIdAndDelete(id);
      if (!deleted) return res.status(404).json({ message: 'Service not found' });
      return res.json({ message: 'Service deleted', id });
    }
    
    const index = memoryServices.findIndex(s => s._id === id);
    if (index === -1) return res.status(404).json({ message: 'Service not found' });
    memoryServices.splice(index, 1);
    res.json({ message: 'Service deleted', id });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting service', error: err.message });
  }
};
