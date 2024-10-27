const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  liveDemo: { type: String, required: true },
  repository: { type: String, required: true }
});

module.exports = mongoose.model('Project', projectSchema);
