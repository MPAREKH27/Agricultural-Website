const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  name: { type: String, required: true },
  scientificName: { type: String, required: true },
  category: { type: String, required: true, enum: ['Cereal', 'Pulse', 'Vegetable', 'Fruit', 'Cash Crop', 'Oilseed'] },
  season: { type: String, required: true, enum: ['Kharif', 'Rabi', 'Zaid', 'All Season'] },
  soilType: { type: String, required: true },
  waterRequirement: { type: String, required: true, enum: ['Low', 'Moderate', 'High', 'Very High'] },
  duration: { type: String, required: true }, // e.g. "110-130 Days"
  expectedYield: { type: String, required: true }, // e.g. "45-55 Quintals/Hectare"
  marketPrice: { type: Number, required: true }, // in ₹/Quintal
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  suitableRegion: { type: String, default: 'Pan India' },
  pestAlerts: [String]
}, { timestamps: true });

module.exports = mongoose.model('Crop', cropSchema);
