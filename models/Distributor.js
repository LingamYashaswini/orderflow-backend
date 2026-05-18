const mongoose = require('mongoose');

const distributorSchema = new mongoose.Schema({
  name:    { type: String, required: true },
  phone:   { type: String, required: true },
  address: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Distributor', distributorSchema);