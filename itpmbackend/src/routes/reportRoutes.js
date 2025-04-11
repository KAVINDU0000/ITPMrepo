const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Generate report
router.get('/report', reportController.generateReport);

module.exports = router; 