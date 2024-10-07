const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define routes
app.use('/api/products', require('./routes/products'));
app.use('/api/categories', require('./routes/categories'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});