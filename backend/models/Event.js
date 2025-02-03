// backend/models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  category: { type: String, enum: ['exam', 'holiday', 'guest lecture', 'workshop'], required: true },
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
