const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/ProductDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


const productSchema = new mongoose.Schema({
  rfid: String,
  barcode: String,
  name: String,
  price: Number,
  imageUrl: String, 
  quantity: Number, 
});
const Product = mongoose.model('Product', productSchema);


app.get('/product/:barcode', async (req, res) => {
  try {
    const product = await Product.findOne({ barcode: req.params.barcode });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.get('/cart', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// module.exports = { Product };