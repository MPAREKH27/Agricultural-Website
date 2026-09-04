const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/crops', require('./routes/cropRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/resources', require('./routes/resourceRoutes'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    service: 'AgriSmart Agricultural Website API',
    timestamp: new Date().toISOString()
  });
});

// Initialize database connection & start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 AgriSmart Server listening on port ${PORT}`);
    console.log(`🌐 API Endpoint: http://localhost:${PORT}/api/crops`);
  });
});
