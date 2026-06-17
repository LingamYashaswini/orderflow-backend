const Payment = require('../models/Payment');

const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate('distributorId', 'name phone').sort({ date: 1 });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createPayment = async (req, res) => {
  try {
    const { distributorId, distributorName, date, amount } = req.body;
    const payment = new Payment({ distributorId: distributorId || undefined, distributorName, date, amount });
    const saved = await payment.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updatePayment = async (req, res) => {
  try {
    const { distributorId, distributorName, date, amount } = req.body;
    const updated = await Payment.findByIdAndUpdate(
      req.params.id,
      { distributorId: distributorId || undefined, distributorName, date, amount },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Payment not found' });
    res.json(updated);
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

module.exports = { getPayments, createPayment, updatePayment, deletePayment };