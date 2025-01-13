const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { Product } = require('./server'); // Ensure the path is correct

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ProductDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const filePath = path.join(__dirname, 'info.json');
const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

async function importData() {
  try {
    await Product.deleteMany(); // Clear existing data
    await Product.insertMany(jsonData); // Import new data
    console.log('Data imported successfully');
  } catch (err) {
    console.error('Error importing data:', err);
  } finally {
    mongoose.connection.close(); // Close connection after import
  }
}

importData();
