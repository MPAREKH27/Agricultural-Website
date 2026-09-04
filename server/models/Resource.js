const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true, enum: ['Government Scheme', 'Farming Guide', 'Weather Advisory', 'Subsidy News', 'Organic Methods'] },
  publisher: { type: String, required: true },
  publishDate: { type: String, required: true },
  summary: { type: String, required: true },
  content: { type: String, required: true },
  linkUrl: { type: String, default: '#' },
  badge: { type: String, default: 'Official' }
}, { timestamps: true });

module.exports = mongoose.model('Resource', resourceSchema);
