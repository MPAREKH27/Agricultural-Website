const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true, enum: ['Seeds', 'Fertilizers', 'Pesticides', 'Tools & Machinery', 'Irrigation', 'Bio-Stimulants'] },
  price: { type: Number, required: true }, // in ₹
  rating: { type: Number, default: 4.8 },
  stock: { type: Number, required: true },
  unit: { type: String, required: true }, // e.g. "kg", "litre", "pack", "unit"
  vendor: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  isOrganic: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
