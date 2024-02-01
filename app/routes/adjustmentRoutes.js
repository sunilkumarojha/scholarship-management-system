const express = require('express');
const router = express.Router();
const adjustmentController = require('../controllers/adjustmentController');

// Endpoint to handle manual adjustments
router.post('/manual-adjustment', adjustmentController.submitManualAdjustment);

module.exports = router;