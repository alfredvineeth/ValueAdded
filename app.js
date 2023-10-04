const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Alfred', { useNewUrlParser: true, useUnifiedTopology: true });

// Include your API routes
const apiRoutes = require('./routes');
app.use(apiRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});