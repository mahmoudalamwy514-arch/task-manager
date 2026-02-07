const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // مهم جداً عشان req.body يشتغل

// Routes
app.use('/api/auth', require('./Backend/Routes/auth'));
app.use('/api/tasks', require('./Backend/Routes/tasks'));

// Connect DB
mongoose.connect('mongodb://localhost:27017/taskmanager')
  .then(() => console.log('Database connected'))
  .catch(err => console.log(err));

// Start server
app.listen(5000, () => console.log('Server running on port 5000'));
