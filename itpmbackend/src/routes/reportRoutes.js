const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Generate reports
router.get('/', reportController.generateReport);

module.exports = router; 