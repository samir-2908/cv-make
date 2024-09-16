// server/models/CV.js
const mongoose = require('mongoose');

const cvSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  experience: { type: String, required: true },
  education: { type: String, required: true },
  skills: [String],
}, { timestamps: true });

module.exports = mongoose.model('CV', cvSchema);
