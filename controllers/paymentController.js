const Payment = require('../models/Payment');

const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate('distributorId', 'name phone');
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createPayment = async (req, res) => {
  try {
    const { distributorId, date, amount } = req.body;
    const payment = new Payment({ distributorId, date, amount });
    const saved = await payment.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deletePayment = async (req, res) => {
  try {
    const deleted = await Payment.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Payment not found' });
    res.json({ message: 'Payment deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getPayments, createPayment, deletePayment };