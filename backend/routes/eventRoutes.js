// backend/routes/eventRoutes.js
const express = require('express');
const { createEvent, getEvents } = require('../controllers/eventController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, createEvent);
router.get('/', protect, getEvents);

module.exports = router;
