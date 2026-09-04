const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  try {
    const connStr = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/agricultural_db';
    console.log(`Connecting to MongoDB at: ${connStr}`);
    
    // Attempt Mongoose connection with 3-second timeout
    await mongoose.connect(connStr, {
      serverSelectionTimeoutMS: 3000
    });
    
    isConnected = true;
    console.log(`✅ MongoDB Connected successfully: ${mongoose.connection.host}`);
    return true;
  } catch (error) {
    isConnected = false;
    console.warn(`⚠️ MongoDB Connection Warning: ${error.message}`);
    console.warn('ℹ️ Express server will use built-in agricultural dataset & in-memory MongoDB fallback store.');
    return false;
  }
};

const getIsConnected = () => isConnected;

module.exports = { connectDB, getIsConnected };
