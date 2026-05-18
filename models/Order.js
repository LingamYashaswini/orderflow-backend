const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  distributorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Distributor', required: true },
  date:          { type: Date, required: true },
  invoiceNumber: { type: String, required: true },
  amount:        { type: Number, required: true },
  totalAmount:   { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);