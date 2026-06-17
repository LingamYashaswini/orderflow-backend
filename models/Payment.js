const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  distributorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Distributor', required: false },
  distributorName: { type: String, required: false },
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);