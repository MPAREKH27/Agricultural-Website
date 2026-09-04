const Crop = require('../models/Crop');
const { getIsConnected } = require('../config/db');
let { initialCrops } = require('../data/seedData');

let memoryCrops = [...initialCrops];

// GET all crops
exports.getCrops = async (req, res) => {
  try {
    const { category, season, search } = req.query;
    
    if (getIsConnected()) {
      let count = await Crop.countDocuments();
      if (count === 0) {
        console.log('Seeding initial crops into MongoDB...');
        await Crop.insertMany(initialCrops.map(({ _id, ...rest }) => rest));
      }

      let query = {};
      if (category && category !== 'All') query.category = category;
      if (season && season !== 'All') query.season = season;
      if (search) query.name = { $regex: search, $options: 'i' };
      
      const crops = await Crop.find(query).sort({ createdAt: -1 });
      return res.json(crops);
    }
    
    // In-memory fallback
    let filtered = [...memoryCrops];
    if (category && category !== 'All') {
      filtered = filtered.filter(c => c.category === category);
    }
    if (season && season !== 'All') {
      filtered = filtered.filter(c => c.season === season);
    }
    if (search) {
      filtered = filtered.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.scientificName.toLowerCase().includes(search.toLowerCase()));
    }
    return res.json(filtered);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching crops', error: err.message });
  }
};

// GET single crop
exports.getCropById = async (req, res) => {
  try {
    if (getIsConnected()) {
      const crop = await Crop.findById(req.params.id);
      if (!crop) return res.status(404).json({ message: 'Crop not found' });
      return res.json(crop);
    }
    const crop = memoryCrops.find(c => c._id === req.params.id);
    if (!crop) return res.status(404).json({ message: 'Crop not found' });
    res.json(crop);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching crop details', error: err.message });
  }
};

// CREATE new crop
exports.createCrop = async (req, res) => {
  try {
    const cropData = req.body;
    if (getIsConnected()) {
      const newCrop = new Crop(cropData);
      const savedCrop = await newCrop.save();
      return res.status(201).json(savedCrop);
    }
    
    const newCrop = {
      _id: 'c_' + Date.now(),
      ...cropData,
      marketPrice: Number(cropData.marketPrice),
      createdAt: new Date().toISOString()
    };
    memoryCrops.unshift(newCrop);
    res.status(201).json(newCrop);
  } catch (err) {
    res.status(400).json({ message: 'Error creating crop record', error: err.message });
  }
};

// UPDATE crop
exports.updateCrop = async (req, res) => {
  try {
    const { id } = req.params;
    if (getIsConnected()) {
      const updatedCrop = await Crop.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
      if (!updatedCrop) return res.status(404).json({ message: 'Crop not found' });
      return res.json(updatedCrop);
    }
    
    const index = memoryCrops.findIndex(c => c._id === id);
    if (index === -1) return res.status(404).json({ message: 'Crop not found' });
    
    memoryCrops[index] = { ...memoryCrops[index], ...req.body };
    res.json(memoryCrops[index]);
  } catch (err) {
    res.status(400).json({ message: 'Error updating crop record', error: err.message });
  }
};

// DELETE crop
exports.deleteCrop = async (req, res) => {
  try {
    const { id } = req.params;
    if (getIsConnected()) {
      const deletedCrop = await Crop.findByIdAndDelete(id);
      if (!deletedCrop) return res.status(404).json({ message: 'Crop not found' });
      return res.json({ message: 'Crop record deleted successfully', id });
    }
    
    const index = memoryCrops.findIndex(c => c._id === id);
    if (index === -1) return res.status(404).json({ message: 'Crop not found' });
    
    memoryCrops.splice(index, 1);
    res.json({ message: 'Crop record deleted successfully', id });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting crop record', error: err.message });
  }
};
