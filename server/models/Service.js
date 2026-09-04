const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true, enum: ['Soil Testing', 'Machinery Rental', 'Irrigation Setup', 'Drone Spraying', 'Harvesting', 'Expert Advisory'] },
  provider: { type: String, required: true },
  pricePerDay: { type: Number, required: true }, // in ₹
  location: { type: String, required: true },
  contactPhone: { type: String, required: true },
  availability: { type: String, default: 'Available Now' },
  rating: { type: Number, default: 4.9 },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
