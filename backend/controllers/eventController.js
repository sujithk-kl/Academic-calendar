// backend/controllers/eventController.js
const Event = require('../models/Event');

// Create an event
const createEvent = async (req, res) => {
  const { title, description, date, category } = req.body;

  try {
    const event = new Event({ title, description, date, category });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createEvent, getEvents };
