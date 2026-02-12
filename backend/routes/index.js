const express = require('express');
const router = express.Router();

// Import route modules
// const userRoutes = require('./userRoutes');
// const authRoutes = require('./authRoutes');

// Use routes
// router.use('/users', userRoutes);
// router.use('/auth', authRoutes);

// Test route
router.get('/test', (req, res) => {
  res.json({ message: 'Patuwa Villa API is working!' });
});

module.exports = router;
