const Distributor = require('../models/Distributor');

// GET all distributors
const getDistributors = async (req, res) => {
  try {
    const distributors = await Distributor.find();
    res.json(distributors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET single distributor
const getDistributor = async (req, res) => {
  try {
    const distributor = await Distributor.findById(req.params.id);
    if (!distributor) return res.status(404).json({ message: 'Distributor not found' });
    res.json(distributor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST create distributor
const createDistributor = async (req, res) => {
  try {
    const { name, phone, address } = req.body;
    const distributor = new Distributor({ name, phone, address });
    const saved = await distributor.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update distributor
const updateDistributor = async (req, res) => {
  try {
    const { name, phone, address } = req.body;
    const updated = await Distributor.findByIdAndUpdate(
      req.params.id,
      { name, phone, address },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Distributor not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE distributor
const deleteDistributor = async (req, res) => {
  try {
    const deleted = await Distributor.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Distributor not found' });
    res.json({ message: 'Distributor deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getDistributors,
  getDistributor,
  createDistributor,
  updateDistributor,
  deleteDistributor
};