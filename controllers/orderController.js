const Order = require('../models/Order');

// GET all orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('distributorId', 'name phone');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET orders by distributor
const getOrdersByDistributor = async (req, res) => {
  try {
    const orders = await Order.find({ distributorId: req.params.distributorId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST create order
const createOrder = async (req, res) => {
  try {
    const { distributorId, date, invoiceNumber, amount } = req.body;
    const order = new Order({
      distributorId,
      date,
      invoiceNumber,
      amount,
      totalAmount: amount
    });
    const saved = await order.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update order
const updateOrder = async (req, res) => {
  try {
    const { date, invoiceNumber, amount } = req.body;
    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      { date, invoiceNumber, amount, totalAmount: amount },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Order not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE order
const deleteOrder = async (req, res) => {
  try {
    const deleted = await Order.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Order not found' });
    res.json({ message: 'Order deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getOrders,
  getOrdersByDistributor,
  createOrder,
  updateOrder,
  deleteOrder
};