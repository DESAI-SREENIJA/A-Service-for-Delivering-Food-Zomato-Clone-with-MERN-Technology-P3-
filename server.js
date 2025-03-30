const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));

// Routes
app.get('/', (req, res) => {
  res.send('Food Delivery App Backend is Running!');
});

// Sample API Route
app.use('/api/restaurants', require('./routes/restaurants'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
