require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const dummyRoutes = require('./routes/dummyRoutes');
const userRoutes = require('./routes/userRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    console.error('Error: MONGO_URI is not defined in .env file');
    process.exit(1); 
}

mongoose.set('strictQuery', true);
mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB successfully!');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

app.use('/api', dummyRoutes);
app.use('/api', userRoutes);
app.use('/api/transactions', transactionRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});