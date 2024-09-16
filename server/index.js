// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cvRoutes = require('./routes/cvRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', cvRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Database connection
mongoose.connect('mongodb://localhost/cv-builder', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.log(err));
